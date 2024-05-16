Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get "/", to: "application#index"
  get "/session", to: "application#current_session"

  resources :questions, only: [:create]

  # Defines the root path route ("/")
  # root "articles#index"
end
