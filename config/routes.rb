# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  devise_for :users
  resources :tools
  root to: "home#index"

  namespace :admin do
    resources :users, :tools
    get '/dashboard/home' => 'dashboard#home'
    get '/dashboard/globals' => 'dashboard#globals'
    get '/dashboard/themes' => 'dashboard#themes'
    get '/dashboard/users' => 'dashboard#users'
    get '/dashboard/tools' => 'dashboard#tools'
  end

  get '/about' => 'about#index'
  get '/contact' => 'contact#index'
end
