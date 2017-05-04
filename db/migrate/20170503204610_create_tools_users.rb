class CreateToolsUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :tools_users  do |t|
      t.belongs_to :tool, index: true
      t.belongs_to :user, index: true
    end
  end
end
