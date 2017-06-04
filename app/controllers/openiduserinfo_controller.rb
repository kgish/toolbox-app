class OpeniduserinfoController < ApplicationController
  skip_before_action :authenticate_user!

  def userinfo
    json = userinfo_params

    unless json
      render json: { error: { errors: ['Missing userinfo params'] } }, status: :unprocessable_entity
    end

    user = User.find_by(email: json[:email])

    if user
      sign_in(:user, user)
      user.update(
        openid_sub: json[:sub],
        openid_dt: DateTime.now
      )
      render json: { userinfo: json }, status: :ok, location: user
    else
      render json: { userinfo: json }, status: :created, location: user
    end
  end

  private

  def userinfo_params
    params.require(:userinfo).permit(:updated_at, :username, :name, :given_name, :family_name, :email, :sub, :role, :o)
  end
end
