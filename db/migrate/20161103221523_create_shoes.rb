class CreateShoes < ActiveRecord::Migration[5.0]
  def change
    create_table :shoes do |t|
      t.string :brand
      t.string :style
      t.string :style_number
      t.string :color
      t.integer :quantity
      t.integer :size
      t.string :UPC
      t.text :description
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
  end
end
