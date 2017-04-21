class CreateTools < ActiveRecord::Migration[5.0]
  def change
    create_table :tools do |t|
      t.string :name
      t.string :icon
      t.string :color
      t.string :title
      t.text :text

      t.timestamps
    end
  end
end
