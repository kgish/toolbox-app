class ChangeValueToStringGlobals < ActiveRecord::Migration[5.0]
  def change
    change_column :globals, :value, :string
  end
end
