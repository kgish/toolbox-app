class AddIdentityUrlToUsers < ActiveRecord::Migration[5.0]
  def change
    change_table :users do |t|
      t.string :identity_url
    end
    add_index :users, :identity_url, :unique => true
  end
end
