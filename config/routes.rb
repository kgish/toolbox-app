# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do

  devise_for :users

  root to: "home#index"

  resources :tools
  resources :users
  resources :globals
  resources :themes

  resources :portals, only: [:show]

  get '/about' => 'about#index'
  get '/contact' => 'contact#index'

end
