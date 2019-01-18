Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'hello_reacts' => 'hello_reacts#index'
  get 'tic_toc_toes' => 'tic_toc_toes#index'
  get 'to_dos' => 'to_dos#index'
end
