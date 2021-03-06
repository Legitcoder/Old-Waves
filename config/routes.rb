Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

   namespace :api, defaults: { format: :json } do
     resources :users, only: [:index, :show, :create]
     resources :sessions, only: [:create, :destroy, :show]
     resources :playlists
     resources :artists, only: [:index, :show]
     resources :albums, only: [:index, :show]
   end

end
