class ItemsController < ApplicationController
  def index

    render(status: 200, json: Shoe.all)
  end
end
