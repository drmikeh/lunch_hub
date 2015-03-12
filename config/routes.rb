Rails.application.routes.draw do
  # root 'static_pages#welcome'

  namespace :api do
    # These resources are available from the AngularJS routes
    resources :groups, except: [:new, :edit]
    resources :users, only: [:create, :show, :update, :destroy]
    resources :sessions, only: [:index, :create]#, :destroy]
    delete '/sessions', to: 'sessions#destroy'
  end
end
