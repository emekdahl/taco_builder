Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root "tacos#my_tacos", as: :authenticated_root
  end
  root 'tacos#home'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :tacos, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
