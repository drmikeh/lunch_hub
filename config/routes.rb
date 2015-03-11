Rails.application.routes.draw do
  # root 'static_pages#welcome'

  # We have put everything under '/app' or '/api' so that
  # we have 2 prefixes for our proxy:
  namespace :app do
    # These resources are available from the Rails routes

  end

  namespace :api do
    # These resources are available from the AngularJS routes
    resources :groups, except: [:new, :edit]
    resources :users, only: [:create, :show, :update, :destroy]
    resources :sessions, only: [:create]#, :destroy]
    delete '/sessions', to: 'sessions#destroy'
  end
end
