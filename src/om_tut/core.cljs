(ns om-tut.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]))

(enable-console-print!)

;; (def app-state (atom
;;                 {:contacts
;;                  [{:first "Ben" :last "Bitdiddle" :email "benb@mit.edu"}
;;                   {:first "Alyssa" :middle-initial "P" :last "Hacker" :email "aphacker@mit.edu"}
;;                   {:first "Eva" :middle "Lu" :last "Ator" :email "eval@mit.edu"}
;;                   {:first "Louis" :last "Reasoner" :email "prolog@mit.edu"}
;;                   {:first "Cy" :middle-initial "D" :last "Effect" :email "bugs@mit.edu"}
;;                   {:first "Lem" :middle-initial "E" :last "Tweakit" :email "morebugs@mit.edu"}]}))

(def app-state (atom {:list ["Lion" "Zebra" "Buffalo" "Antelope"]}))

#_(defn list-view [app owner]
  (apply dom/ul nil
         (map #(dom/li %2 %) (:list app) (stripe))))

#_(defn debug [app owner]
  (reify
    om/IRender
    (render [this]
            (dom/h2 nil "Debugddd.."))))

(om/root debug app-state
         {:target (. js/document (getElementById "app"))})




































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
