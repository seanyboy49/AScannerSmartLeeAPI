Rails.application.routes.draw do
  scope '/api' do
    get :shoe, to: 'items#index'
  end
end
