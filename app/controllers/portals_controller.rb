class PortalsController < ApplicationController
  before_action :set_tool, only: [:show]
  before_filter :restrict_user_signed_in

  def show
  end

  protected

  # redirect if user not logged in or is not admin
  def restrict_user_signed_in
    unless user_signed_in?
      redirect_to root_path # change this to your 404 page if needed
    end
  end

  private

  def set_tool
    @tool = Tool.find_by_name!(params[:id])
  end

end
