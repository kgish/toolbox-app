# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do

  devise_for :users

  root to: "home#index"

  resources :tools
  resources :users
  resources :globals
  resources :themes
  resources :profiles

  resources :portals, only: [:show]

  get '/about' => 'about#index'
  get '/contact' => 'contact#index'

  get '/openidconnect' => 'openidconnect#index'
  get '/openidcallback' => 'openidcallback#index'
  post '/openiduserinfo' => 'openiduserinfo#userinfo'

  mount Bootsy::Engine => '/bootsy', as: 'bootsy'

end
