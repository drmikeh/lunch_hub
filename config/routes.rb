Rails.application.routes.draw do
  # root 'static_pages#welcome'

  namespace :api do
    # These resources are available from the AngularJS routes
    resources :groups, except: [:new, :edit]
    resources :users,  except: [:new, :edit]
    resources :sessions, only: [:index, :create] #, :destroy]

    # This way we don't need to pass in the session ID in the URL,
    # instead we infer it from the cookie.
    delete '/sessions', to: 'sessions#destroy'
  end
end
