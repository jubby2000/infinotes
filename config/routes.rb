Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :notebooks do
      resources :notes
    end
    resources :tags do
      resources :notes
    end  
    resources :notes, only: [:index]
    resources :taggings, only: [:index, :show, :create, :destroy]
  end

  root :to => 'static_pages#root'
end
