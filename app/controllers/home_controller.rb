class HomeController < ApplicationController
  def index
    if user_signed_in?
      if current_user.admin?
        render 'admin/index'
      else
        @tools = Tool.all
      end
    end
  end
end
