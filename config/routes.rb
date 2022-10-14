Rails.application.routes.draw do
  resources :books, only: [:index, :create, :show, :destroy, :update]
  resources :reviews, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create]
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to:  "users#show"
end
