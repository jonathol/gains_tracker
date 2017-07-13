Rails.application.routes.draw do
  devise_for :users

  root to: 'application#angular'

  resources :workouts do
    resources :exercises
  end
end
