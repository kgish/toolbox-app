class AddDescriptionToThemes < ActiveRecord::Migration[5.0]
  def change
    add_column :themes, :description, :string
  end
end
