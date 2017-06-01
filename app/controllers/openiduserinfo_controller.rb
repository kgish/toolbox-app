class OpeniduserinfoController < ApplicationController
  skip_before_action :authenticate_user!

  def userinfo

    render json: params, status: :ok

  end

end
