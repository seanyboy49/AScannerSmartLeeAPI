class CreateStyles < ActiveRecord::Migration[5.0]
  def change
    create_table :styles do |t|
      t.string :name
      t.integer :style_number
      t.references :brand, foreign_key: true

      t.timestamps
    end
  end
end
