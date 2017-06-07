Rails.application.routes.draw do
  root 'application#angular'

  resources :articles do	
  	resources :details 
  end
end
