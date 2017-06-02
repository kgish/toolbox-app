class AddOpenidToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :openid_sub, :string
    add_column :users, :openid_dt, :datetime
  end
end
