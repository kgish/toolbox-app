class OpeniduserinfoController < ApplicationController
  skip_before_action :authenticate_user!

  def userinfo
    json = userinfo_params
    if json
      # Do something
      render json: { userinfo: json }, status: :ok
    else
      render json: { error: { errors: ['Missing userinfo params'] } }, status: :unprocessable_entity
    end
  end

  private

  def userinfo_params
    params.require(:userinfo).permit(:updated_at, :user_name, :user_role, :name, :given_name, :family_name, :email, :sub, :role, :o)
  end

end
