class ItemsController < ApplicationController
  def index
    shoes = Array.new(Shoe.all)
    render :json => shoes
    p shoes
  end
end
