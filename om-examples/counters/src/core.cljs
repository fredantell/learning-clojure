(ns examples.counters.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]))

(enable-console-print!)

(def target (.getElementById js/document "manual"))

(defn increase [e app {:keys [tally] :as state} owner]
  (om/set-state! owner :tally (inc tally))
  (put! (:cc state) (:id state)))

(defn decrease [e app state owner]
  (om/set-state! owner :tally (dec (:tally state)))
  (put! (:cc state) (:id state)))

(defn show [bool]
  (if bool
    #js {}
    #js {:display "none"}))

(defn one-counter [app owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      "counter")
    om/IInitState
    (init-state [_]
      {:tally 10})
    om/IRenderState
    (render-state [_ {:keys [tally id lc] :as state}]
      (dom/div nil
        (println state)
        (dom/span nil tally)
        (dom/button #js {:onClick #(increase % app state owner )} "+")
        (dom/button #js {:onClick #(decrease % app state owner)} "-")
        (dom/span #js {:style (show (= id lc))} "I was clicked")))))

(defn manual-counters [app owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:last-clicked 1
       :click-chan (chan)})
    om/IWillMount
    (will-mount [_]
      (let [click-chan (om/get-state owner :click-chan)]
        (go (loop []
          (let [click-msg (<! click-chan)]
            (println "You got a message")
            (println click-msg)
            (om/set-state! owner :last-clicked click-msg)
            (println "New state is " (om/get-state owner :last-clicked)))
              (recur)))))
    om/IRenderState
    (render-state [_ {:keys [last-clicked] :as state}]
      (println "I'm rendering")
      (apply dom/div nil
       (map
        #(om/build
          one-counter
          app
          {:state {:id % :lc (:last-clicked state) :cc (:click-chan state)}})
        (range 0 10))))))

(def !manual (atom {}))
(om/root manual-counters !manual {:target target})



;; (ns examples.counters.core
;;   (:require-macros [cljs.core.async.macros :refer [go]])
;;   (:require [om.core :as om :include-macros true]
;;             [om.dom :as dom :include-macros true]
;;             [cljs.core.async :refer [<! chan put! sliding-buffer]]))

;; (enable-console-print!)

;; (def app-state
;;   (atom {:counters (into [] (map (fn [n] {:id n :count 0}) (range 10)))}))

;; (defn counter [data owner]
;;   (reify
;;     om/IRenderState
;;     (render-state [_ {:keys [last-clicked]}]
;;       (dom/div nil
;;         (dom/label nil (:count data))
;;         (dom/button
;;           #js {:onClick
;;                (fn [e]
;;                  (om/transact! data :count inc)
;;                  (put! last-clicked (.-path data)))}
;;           "+")
;;         (dom/button
;;           #js {:onClick
;;                (fn [e]
;;                  (om/transact! data :count dec)
;;                  (put! last-clicked (.-path data)))}
;;           "-")))))

;; (defn counter-view [app owner]
;;   (reify
;;     om/IInitState
;;     (init-state [_]
;;       {:chans {:last-clicked (chan (sliding-buffer 1))}})
;;     om/IWillMount
;;     (will-mount [_]
;;       (let [last-clicked (om/get-state owner [:chans :last-clicked])]
;;         (go (while true
;;               (let [lc (<! last-clicked)]
;;                 (om/set-state! owner :message lc))))))
;;     om/IRenderState
;;     (render-state [_ {:keys [message chans]}]
;;       (apply dom/div nil
;;         (dom/h1 #js {:key "head"} "A Counting Widget!")
;;         (dom/div
;;           #js {:key "message"
;;                :style
;;                (if message
;;                  #js {:display "block"}
;;                  #js {:display "none"})}
;;           (when message
;;             (str "Last clicked item was " (last message))))
;;         (om/build-all counter (:counters app)
;;           {:key :id :init-state chans})))))

;; (om/root counter-view app-state
;;   {:target (.getElementById js/document "app")
;;    :tx-listen
;;    (fn [tx-data root-cursor]
;;      (println tx-data))})

