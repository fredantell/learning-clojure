(ns examples.animation.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(def app-state (atom {:count 0}))

(defn animation-view [app owner opts]
  (reify
;;     om/IDisplayName
;;     (display-name []
;;       "animation")
    om/IWillMount
    (will-mount [_]
      (js/setInterval
        (fn [] (om/transact! app :count inc))
        16))
    om/IRender
    (render [_]
      (dom/div nil (:count app)))))

;; (om/root animation-view app-state
;;   {:target (.getElementById js/document "app")})


(def !manual (atom {:count 0
                    :incrementer 1}))

(defn incrementer [app owner opts]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
        (dom/div nil (:count app))
        (dom/button #js {:onClick (fn [] ((om/transact! app :count #(+ % (:incrementer @app)))
                                          (om/transact! app :incrementer inc)))} "Button")))))

  @!manual

(def target {:target (.getElementById js/document "manual")})

(om/root incrementer !manual
  {:target (.getElementById js/document "manual")})
