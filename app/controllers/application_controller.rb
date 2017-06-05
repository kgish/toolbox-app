class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  # Force user to redirect to login page if the user was not logged in
  before_action :authenticate_user!
  before_action :setup_globals

  def record_not_found
    flash[:error] = '404 Record Not Found'
    redirect_to root_path
  end

  def after_sign_in_path_for(resource)
    stored_location_for(resource) ||
    if resource.is_a?(User) && resource.admin?
      admin_path
    else
      super
    end
  end

  def setup_globals
    global = Global.find_by(key: 'app-name')
    @app_name = global ? global.value : 'Participation-Tool'
    global = Global.find_by(key: 'annotator-store-url')
    @annotator_store_url = global ? global.value : 'http://localhost:3001'

    gon.push(
      rails_env: Rails.env,
      openid: {
        client_id: ENV['OPENID_CLIENT_ID'],
        client_secret: ENV['OPENID_CLIENT_SECRET'],
        redirect_uri: ENV['OPENID_REDIRECT_URI'],
        scope: ENV['OPENID_SCOPE'],
        response_type: ENV['OPENID_RESPONSE_TYPE']
      }
    )

  end

end
