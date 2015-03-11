Rails.application.routes.draw do
  root 'static_pages#welcome'

  # We have put everything under '/app' or '/api' so that
  # we have 2 prefixes for our proxy:
  scope '/app' do
    # These resources are available from the Rails routes
    resources :users, except: [:create, :show]
    resources :sessions, only: [:create, :destroy]
  end

  scope '/api' do
    # These resources are available from the AngularJS routes
    resources :groups, except: [:new, :edit]
  end
end
