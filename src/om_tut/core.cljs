(ns om-tut.core
           (:require [om.core :as om :include-macros true]
                     [om.dom :as dom :include-macros true]
                     [clojure.string :as string]))

(enable-console-print!)

(def app-state
  (atom
    {:people
     [{:type :student :first "Ben" :last "Bitdiddle" :email "benb@mit.edu"}
      {:type :student :first "Alyssa" :middle-initial "P" :last "Hacker"
       :email "aphacker@mit.edu"}
      {:type :professor :first "Gerald" :middle "Jay" :last "Sussman"
       :email "metacirc@mit.edu" :classes [:6001 :6946]}
      {:type :student :first "Eva" :middle "Lu" :last "Ator" :email "eval@mit.edu"}
      {:type :student :first "Louis" :last "Reasoner" :email "prolog@mit.edu"}
      {:type :professor :first "Hal" :last "Abelson" :email "evalapply@mit.edu"
       :classes [:6001]}]
     :classes
     {:6001 "The Structure and Interpretation of Computer Programs"
      :6946 "The Structure and Interpretation of Classical Mechanics"
      :1806 "Linear Algebra"}}))

(defn middle-name [{:keys [middle middle-initial]}]
  (cond
    middle (str " " middle)
    middle-initial (str " " middle-initial ".")))

(defn display-name [{:keys [first last] :as contact}]
  (str last ", " first (middle-name contact)))

(defn student-view [student owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil (display-name student)))))

(defn professor-view [professor owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "Professor View"))
    om/IRender
    (render [this]
      (dom/li nil
        (display-name professor)
        (dom/div nil (dom/label nil "Classes"))
        (apply dom/ul nil
          (let [profs-classes (:classes professor)
                class-names (map #(% (:classes @app-state)) profs-classes)]
            (map #(dom/li nil %) class-names)))))))

(defmulti entry-view (fn [person _] (:type person)))

(defmethod entry-view :student
  [person owner]
  (student-view person owner))

(defmethod entry-view :professor
  [person owner]
  (professor-view person owner))

(defn registry-view [app owner]
  (reify
    om/IRenderState
    (render-state [_ state]
      (dom/div nil
        (dom/h2 nil "Registry")
               (apply dom/ul nil
                 (om/build-all entry-view (:people app))
               #_(dom/h3 nil (entry-view (:people @app-state))))))))

(om/root registry-view app-state
  {:target (. js/document (getElementById "registry"))})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Classes view
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(extend-type string
  ICloneable
  (-clone [s] (js/String. s)))

;; (extend-type PersistentVector
;;   ICloneable
;;   (-clone [v] [v]))

(extend-type js/String
  ICloneable
  (-clone [s] (js/String s))
  om/IValue
  (-value [s] (str s)))

(defn display [editing?]
  (if editing?
    #js {}
    #js {:display "none"}))

(defn handle-change [e text owner]
  (om/transact! text (fn [_] (.. e -target -value))))

(defn commit-change [text owner]
  (om/set-state! owner :editing false))

(defn class-view [one-class owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil (get one-class 1)))))

(defn editing-start [event editing owner]
  (println "Editing Started")
  (println event)
  (println editing)
  (println owner)
  (om/set-state! owner editing :true)
  (println editing))


#_(defn editable [element owner]
  (reify

    om/IInitState
    (init-state [this]
                {:editing false})
    om/IRenderState
    (render-state [_ {:keys [editing]}]
      (dom/div nil
       (dom/span #js {:style (display (not editing))} (om/value element))
       (println element)
       (dom/button #js {:onClick #(om/set-state! owner :editing true) } "Edit")
       (dom/input #js {:style (display editing)
                       :value (om/value element)
                       :onChange #(println "Changing")
                       :onKeyPress #(when (== (.-keyCode %) 13)
                                      (commit-change (om/value element) owner))
                       :onBlur (println "blurred")})))))

(defn editable [text owner]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false})
    om/IRenderState
    (render-state [_ {:keys [editing]}]
      (dom/li nil
        (dom/span #js {:style (display (not editing))} (om/value text))
        (dom/input
          #js {:style (display editing)
               :value (om/value text)
               :onChange #(handle-change % text owner)
               :onKeyPress #(when (== (.-keyCode %) 13)
                              (commit-change text owner))
               :onBlur (fn [e] (commit-change text owner))})
        (dom/button
          #js {:style (display (not editing))
               :onClick #(om/set-state! owner :editing true)}
          "Edit")))))

(defn classes [app owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (dom/h2 nil "Classes")
        (apply dom/ul nil
         (om/build-all editable #_class-view (vals (:classes app))))))))

#_(type (vals (:classes @app-state)))

(defn debug [app owner]
  (reify
    om/IRender
    (render [this]
            (dom/h2 nil "Test..."))))

(om/root classes app-state
         {:target (. js/document (getElementById "classes"))})





























;; (defn middle-name [{:keys [middle middle-initial] :as contact}]
;;   (cond
;;    middle (str " " middle)
;;    middle-initial (str " " middle-initial ".")))

;; (defn display-name [{:keys [first last email] :as contact}]
;;   (str last ", " first (middle-name contact)))


;; (defn contact-view [contact owner]
;;   (reify
;;     om/IRenderState
;;     (render-state [this {:keys [delete]}]
;;             (dom/li nil
;;               (dom/span nil (display-name contact))
;;               (dom/button #js {:onClick (fn [e] (put! delete contact))} "Delete")))))

;; (defn contacts-view [app owner]
;;   (reify
;;     om/IInitState
;;     (init-state [_]
;;                 {:delete (chan)})
;;     om/IWillMount
;;     (will-mount [_]
;;                 (let [delete (om/get-state owner :delete)]
;;                   (go (while true
;;                         (let [contact (<! delete)]
;;                           (om/transact! app :contacts
;;                             (fn [])))))))
;;     om/IRenderState
;;     (render-state [this app]
;;       (dom/div nil
;;                (dom/ul nil
;;                        (contact-view app owner))))))

;; (om/root contacts-view app-state
;;          {:target (. js/document (getElementById "contacts"))})







;; #_(defn contact-view [contact owner]
;;   (reify
;;     om/IRender
;;     (render [this]
;;             (dom/li nil
;;               (dom/span nil (display-name contact))
;;               (dom/button nil "Delete")))))

;; #_(defn contacts-view [app owner]
;;   (reify
;;     om/IRender
;;     (render [this]
;;       (dom/div nil?(dom/h2 nil "Contact List")
;;                (apply dom/ul nil
;;                  (om/build-all contact-view (:contacts app)))))))

