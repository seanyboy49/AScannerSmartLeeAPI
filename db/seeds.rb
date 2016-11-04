# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Shoe.create!([
  {brand: "UGG", style: "W Bailey Button II", style_number: "1016226", color: "BLK", quantity: 3, size: 7, UPC: 190108110654, description:"Keep feet cute and cozy in these Bailey Button II boots from UGG, which feature a sheepskin exposed shaft that can stay straight up or be rolled down, and a signature logo etched wood button with an elastic hook-and-loop band strap.", created_at: DateTime.new(2001,2,3,4,5,6), updated_at: DateTime.new(2017,6, 5, 4, 3, 2, 1)},
  {brand: "UGG", style: "W Bailey Button II", style_number: "1016226", color: "BLK", quantity: 5, size: 8, UPC: 190108110661, description:"Keep feet cute and cozy in these Bailey Button II boots from UGG, which feature a sheepskin exposed shaft that can stay straight up or be rolled down, and a signature logo etched wood button with an elastic hook-and-loop band strap.", created_at: DateTime.new(2001,2,3,4,5,6), updated_at: DateTime.new(2017,6, 5, 4, 3, 2, 1)},
  {brand: "UGG", style: "W Classic Short II", style_number: "1016223", color: "CHE", quantity: 12, size: 6, UPC: 190108095494, description:"Keep feet cute and cozy in these Classic Short boots from UGG, which feature plush sheekskin construction both inside and out, and a shaft that can stay straight up or be rolled down. Featured in chestnut", created_at: DateTime.new(2001,2,3,4,5,6), updated_at: DateTime.new(2017,6, 5, 4, 3, 2, 1)},
  {brand: "UGG", style: "W Classic Short II", style_number: "1016223", color: "CHE", quantity: 23, size: 8, UPC: 190108095517, description:"Keep feet cute and cozy in these Classic Short boots from UGG, which feature plush sheekskin construction both inside and out, and a shaft that can stay straight up or be rolled down. Featured in chestnut", created_at: DateTime.new(2001,2,3,4,5,6), updated_at: DateTime.new(2017,6, 5, 4, 3, 2, 1)},
  {brand: "UGG", style: "W Bailey Bow II", style_number: "1016225", color: "GREY", quantity: 15, size: 8, UPC: 190108090338, description:"Two bows adorably update our iconic boot which boasts soft Twinface that has been pretreated for protection against water and stains. Also new is our revolutionary Treadlite by UGG sole which cushions feet and grips exceptionally well on both wet and dry surfaces.", created_at: DateTime.new(2001,2,3,4,5,6), updated_at: DateTime.new(2017,6, 5, 4, 3, 2, 1)}
])

Shoe.where(style: "W Bailey Button II")
