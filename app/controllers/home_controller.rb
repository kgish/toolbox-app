class HomeController < ApplicationController
  def index
    if user_signed_in?
      if current_user.admin?
        render 'admin/index'
      else
        @user = User.find(current_user.id)
        @tools = @user.tools
      end
    end
  end
end
