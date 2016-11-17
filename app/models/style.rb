class Style < ApplicationRecord
  belongs_to :brand
  has_many :shoes
end
