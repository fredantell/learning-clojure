;; Add goog.dom to namespace

(ns async-tut1.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [cljs.core.async :refer [put! chan <!]])
  (:import [goog.net Jsonp]
           [goog Uri]))

(def wiki-search-url
  "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=")

(enable-console-print!)



(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
      (fn [e] (put! out e)))
    out))

(defn jsonp [uri]
  (let [out (chan)
        req (Jsonp. (Uri. uri))]
    (.send req nil (fn [res] (put! out res)))
    out))

(defn query-url [q]
  (str wiki-search-url q))

;;grab the query from the dom dom/getElement
(defn user-query []
  (.-value (dom/getElement "query")))


(defn render [results]
  (str
   "<ul>"
   (apply str
          (for [result results]
            (str "<li>" result "</li>")))
   "</ul>"))

(defn init []
  (let [clicks (listen (dom/getElement "search") "click")
        results-view (dom/getElement "results")]
    (go (while true
          (<! clicks)
          #_(.log js/console (<! (jsonp (query-url (user-query)))))
          (let [[_ results] (<! (jsonp (query-url (user-query))))]
            (set! (.-innerHTML results-view) (render results)))))))

(init)


;; Testing

;; (.log js/console (dom/getElement "query"))


;; (let [clicks (listen (dom/getElement "search") "click")]
;;   (go (while true
;;         (.log js/console (<! clicks)))))


;; (go (.log js/console (<! (jsonp (query-url "birds")))))
