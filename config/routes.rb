# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  devise_for :users
  resources :tools
  root to: "home#index"

  get '/about' => 'about#index'
  get '/contact' => 'contact#index'
end
