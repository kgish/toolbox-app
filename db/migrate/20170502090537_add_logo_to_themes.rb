class AddLogoToThemes < ActiveRecord::Migration[5.0]
  def change
    add_column :themes, :logo, :string
  end
end
