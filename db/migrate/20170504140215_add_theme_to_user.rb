class AddThemeToUser < ActiveRecord::Migration[5.0]
  def change
    add_reference :users, :theme, foreign_key: true
  end
end
