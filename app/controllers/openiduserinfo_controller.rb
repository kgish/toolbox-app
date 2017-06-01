class OpeniduserinfoController < ApplicationController
  skip_before_action :authenticate_user!

  def userinfo

    render json: params, status: :ok
    # render json: userinfo_params, status: :ok

  end

    # private
    #
    # def userinfo_params
    #   params.require(:userinfo).permit(:updated_at, :uid, :name, :given_name, :family_name, :email, :sub, :role, :o)
    # end

end
