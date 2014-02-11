(ns guestbook.routes.auth
  (:require [compojure.core :refer [defroutes GET POST]]
            [guestbook.views.layout :as layout]
            [hiccup.form :refer
             [form-to label text-field password-field submit-button]]
            [noir.response :refer [redirect]]
            [noir.session :as session]
            [noir.validation :refer
             [rule errors? has-value? on-error]]))

(defn control [field name text]
  (list (label name text)
        (field name)
        [:br]))

(defn registration-page []
  (layout/common
   (form-to [:post "/register"]
            (control text-field :id "screen name")
            (control password-field :pass "Password")
            (control password-field :pass1 "Retype Password")
            (submit-button "Create Account"))))
(defn login-page [& [error]]
  (layout/common
   (if error [:div.error "Login error: " error])
   (form-to [:post "/login"]
            (control text-field :id "Screen name")
            (control password-field :pass "Password")
            (submit-button "Login"))))

(defn handle-login [& [id pass]]
  (rule (has-value? id)
        [:id "screen name is required"])
  (rule (= id "foo")
        [:id "unknown user"])
  (rule (has-value? pass)
        [:pass "password is required"])
  (rule (= pass "bar")
        [:pass "invalid password"])
  (if (errors? :id :pass)
    (login-page)
    (do
      (session/put! :user id)
      (redirect "/"))))

(defroutes auth-routes
  (GET "/register" [_] (registration-page))
  (POST "/register" [id pass pass1]
        (if (= pass pass1)
          (redirect "/")
          (registration-page)))
  (GET "/login" [_] (login-page))
  (POST "/login" [id pass] (handle-login id pass))
  (GET "/logout" []
       (layout/common
        (form-to [:post "/logout"]
                 (submit-button "Logout"))))
  (POST "/logout" []
        (session/clear!)
        (redirect "/")))
