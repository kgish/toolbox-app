class LoadDescriptionGlobals < ActiveRecord::Migration[5.0]
  def change
    app_name = Global.find_by(key: 'app_name')
    if app_name
      app_name.description = 'Application name (title)'
      app_name.save!
    end
  end
end
