class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # Force user to redirect to login page if the user was not logged in
  before_action :authenticate_user!
end
