# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  devise_for :users
  root to: "home#index"

  namespace :admin do
    namespace :dashboard do
      resources :tools
      resources :users
      resources :globals
      resources :themes
    end
  end

  get '/about' => 'about#index'
  get '/contact' => 'contact#index'
end
