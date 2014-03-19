(ns examples.counters.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]))

(enable-console-print!)

(def !manual (atom {:last-clicked 0}))
(def target (.getElementById js/document "manual"))

;;counter Widget
;;..field button button
(defn set-last-clicked [id]
  (swap! !manual id ))

(defn increase [e app {:keys [tally] :as state} owner]
  (om/set-state! owner :tally (inc tally))
  (om/transact! app :lc (fn [] 5)))

(defn decrease [e app state owner]
  (om/set-state! owner :tally (dec (:tally state))))

(defn display-click-alert [id]
  (if (= (:last-clicked @!manual) id)
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
    (render-state [_ {:keys [tally] :as state}]
      (dom/div nil
        (println state)
        (dom/span nil tally)
        (dom/button #js {:onClick #(increase % app state owner )} "+")
        (dom/button #js {:onClick #(decrease % app state owner)} "-")
        (dom/span #js {:style (display-click-alert (:id state))} "I was clicked")))))

(defn manual-counters [app owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:last-clicked 0})
    om/IRenderState
    (render-state [_ {:keys [last-clicked] :as state}]
;;     #_(dom/div nil
;;         (om/build one-counter app))
;;       #_(dom/div nil
;;         (om/build one-counter app)
;;         (om/build one-counter app))
      (apply dom/div nil
       (map #(om/build one-counter app {:init-state {:id % :lc last-clicked}}) (range 0 10))))
      #_(apply dom/div nil
       (om/build-all one-counter (repeat 10 app) {}))))

(om/root manual-counters !manual {:target target})


(def !id-atom (atom (map (fn [x] [{:id x :clicked-last false}]) (range 0 10))))

@!id-atom













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

