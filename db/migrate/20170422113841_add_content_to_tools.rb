class AddContentToTools < ActiveRecord::Migration[5.0]
  def change
    add_column :tools, :content, :text
  end
end
