class AddDescriptionToGlobals < ActiveRecord::Migration[5.0]
  def change
    add_column :globals, :description, :string
  end
end
