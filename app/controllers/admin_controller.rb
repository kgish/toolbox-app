class AdminController < ApplicationController
  before_action :restrict_user_by_role

  def index
  end

  protected

  # redirect if user not logged in or is not admin
  def restrict_user_by_role
    unless current_user and current_user.admin?
      redirect_to root_path # change this to your 404 page if needed
    end
  end

end
