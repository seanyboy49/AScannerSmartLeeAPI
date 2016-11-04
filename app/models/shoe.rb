class Shoe < ApplicationRecord

  def self.find_style(style)
    where(style: style)
  end

  def quantity_up
    self.quantity += 1
  end

  def quantity_down
    self.quantity -= 1
  end
end
