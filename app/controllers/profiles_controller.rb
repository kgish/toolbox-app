class ProfilesController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update]
  before_action :restrict_current_user

  def show
  end

  def edit
  end

  def update
    if params[:user][:password].blank? && params[:user][:password_confirmation].blank?
      params[:user].delete(:password)
      params[:user].delete(:password_confirmation)
    end
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'Profile was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # redirect if user not logged in or is not admin
  def restrict_current_user
    unless current_user and (current_user == @user)
      redirect_to root_path # change this to your 404 page if needed
    end
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def user_params
    params.require(:profile).permit(:email, :username, :password, :password_confirmation, :firstname, :lastname, :company, :photo)
  end
end
