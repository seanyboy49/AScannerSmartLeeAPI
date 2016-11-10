class CreateShoes < ActiveRecord::Migration[5.0]
  def change
    create_table :shoes do |t|
      t.string :color
      t.integer :size
      t.integer :quantity
      t.integer :upc, :limit => 8
      t.references :style, foreign_key: true

      t.timestamps
    end
  end
end
