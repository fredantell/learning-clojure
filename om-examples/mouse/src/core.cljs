(ns examples.mouse.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.events :as events]
            [cljs.core.async :as async :refer [>! <! put! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:import [goog.events EventType]))

(enable-console-print!)


(def color-list ["blue" "red" "magenta" "yellow" "black"])
(defn random-color []
  (rand-nth color-list))

(defn listen [el type]
  (let [out (chan)]
    (println "Listen Called")
    (events/listen el type #(put! out %))
    out))

(defn extract-mouse-pos [e]
  (str "Coords: " (.-clientX e) "x" (.-clientY e)))

(defn handle-rate-change [e app owner state]
  (println "handle change fired")
  (.dir js/console (.. e -target -value))
  (om/set-state! owner :rate (.. e -target -value)))

(defn mouse-view [app owner opts]
  (reify
    om/IInitState
    (init-state [_]
     {:color "blue"
      :rate 1000
      :chan {:c-mouse-pos (listen js/window EventType/MOUSEMOVE)}})
    om/IWillMount
    (will-mount [this]
      (let [c-mouse-pos (om/get-state owner [:chan :c-mouse-pos])]
        (go (loop [c-timeout (timeout rate)]
              (let [rate (om/get-state owner :rate)
                    [v c] (async/alts! [c-timeout c-mouse-pos])]
                (condp = c
                  c-mouse-pos
                   (do
                     (println "mouse channel" c)
                     (om/update! app :mouse-pos (extract-mouse-pos v))
                     (recur c-timeout))
                  c-timeout
                    (do
                      (println "timeout channel")
                      (om/set-state! owner :color (random-color))
                      (recur (timeout rate)))))))))
    om/IRenderState
    (render-state [_ state]
      (dom/div nil
        (dom/div #js {:style #js {:color (om/get-state owner :color)}} (:mouse-pos app))
        (dom/input #js {:onChange #(handle-rate-change % app owner state)
                        :value (om/get-state owner :rate)} "Rate of Change")))))

(om/root mouse-view {:mouse-pos "hello"} {:target (.getElementById js/document "rewrite")})




;; (def colors ["red" "blue" "magenta" "yellow" "black" "green"])

;; (defn random-color []
;;   (rand-nth colors))

;; (defn color-change [color]
;;   #js {:style #js {:color color}})

;; (defn listen [el type]
;;   (let [out (chan)]
;;     (println "listen called")
;;     (events/listen el type #(put! out %))
;;     out))

;; (defn mouse-view [app owner]
;;   (reify
;;     om/IInitState
;;     (init-state [this]
;;                 {:color "blue"})
;;     om/IWillMount
;;     (will-mount [_]
;;       (let [mouse-chan
;;             (async/map
;;               (fn [e] [(.-clientX e) (.-clientY e)])
;;               [(listen js/window EventType/MOUSEMOVE)])]
;;         (go (loop [c-reset-color (timeout 3000)]
;;               (let [[v c] (async/alts! [mouse-chan c-reset-color])]
;;                 (if v
;;                   (do  (println "mouse chan")
;;                               (om/update! app :mouse v)
;;                               (recur c-reset-color))
;;                   (do  (println "timeout chan")
;;                                   (om/set-state! owner :color (random-color))
;;                                   (recur (timeout 3000))))
;;                 #_(if v
;;                   (om/update! app :mouse (<! mouse-chan))
;;                   (om/set-state! owner :color (random-color))))
;;               ))))
;;     om/IRender
;;     (render [_]
;;       (dom/p #js {:style #js {:color (om/get-state owner :color)}} #_(color-change (random-color colors))
;;         (when-let [pos (:mouse app)]
;;           (pr-str (:mouse app)))))))

;; (om/root mouse-view {:mouse "hi"} {:target (.getElementById js/document "app")})












;; (defn listen [el type]
;;   (let [out (chan)]
;;     (events/listen el type #(put! out %))
;;     out))

;; (defn mouse-view [app owner]
;;   (reify
;;     om/IWillMount
;;     (will-mount [_]
;;       (let [mouse-chan
;;             (async/map
;;               (fn [e] [(.-clientX e) (.-clientY e)])
;;               [(listen js/window EventType/MOUSEMOVE)])]
;;         (go (while true
;;               (om/update! app :mouse (<! mouse-chan))))))
;;     om/IRender
;;     (render [_]
;;       (dom/p nil
;;         (when-let [pos (:mouse app)]
;;           (pr-str (:mouse app)))))))

;; (om/root mouse-view {:mouse "hi"} {:target (.getElementById js/document "app")})




