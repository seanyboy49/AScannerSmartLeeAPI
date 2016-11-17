class StyleSerializer < ActiveModel::Serializer
  attributes(:shoe)

  belongs_to :brand
end
