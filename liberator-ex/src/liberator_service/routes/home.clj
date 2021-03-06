(ns liberator-service.routes.home
  (:require [compojure.core :refer :all]
            [liberator.core :refer [defresource resource request-method-in]]
            [liberator-service.views.layout :as layout]))

(defresource home
  :service-available? true
  :allowed-methods [:get :put]
;;   :method-allowed? (request-method-in :get)
  :handle-method-not-allowed
    (fn [context]
      (str (get-in context [:request :request-method]) " is not allowed."))
  :handle-ok "This works!"
  :etag "fixed-etag"
  :available-media-types ["text/plain"])

(defroutes home-routes
  (ANY "/" request home))
