class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # Force user to redirect to login page if the user was not logged in
  before_action :authenticate_user!

  def after_sign_in_path_for(resource)
    stored_location_for(resource) ||
      if resource.is_a?(User) && resource.admin?
        admin_home_url
      else
        super
      end
  end
end
