(ns liberator-service.routes.home
  (:require [compojure.core :refer :all]
            [liberator.core :refer [defresource resource request-method-in]]
            [liberator-service.views.layout :as layout]))

;; (defn home []
;;   (layout/common [:h1 "Hello World!"]))

(defresource home
  :handle-ok "This works!"
  :etag "fixed-etag"
  :available-media-types ["text/plain"])

(defroutes home-routes
  (ANY "/" request home))
