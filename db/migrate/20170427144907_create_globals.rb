class CreateGlobals < ActiveRecord::Migration[5.0]
  def change
    create_table :globals do |t|
      t.string :key
      t.text :value

      t.timestamps
    end
    add_index :globals, :key, unique: true
  end
end
