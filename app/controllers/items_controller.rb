class ItemsController < ApplicationController
  def index
    shoes = Array.new(Shoe.all.as_json(include: { style: { include: :brand } }))
    render json: shoes
    p shoes
  end
end
