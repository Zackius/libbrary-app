Rails.application.routes.draw do
  resources :books, only: [:index, :create, :show, :destroy, :update]
  resources :reviews, only: [:destroy, :update, :create]
  resources :users, only: [:index, :show, :create]
  
  post "/register", to: "sessions#register"
  post  "/login", to: "sessions#login"

end
