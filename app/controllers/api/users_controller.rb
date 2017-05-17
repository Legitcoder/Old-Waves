class Api::UsersController < ApplicationController

  #Show all community of users through navigation
  def index
    @users = User.all
  end

  #Show individual user(listener) page
  def show
    @user = User.find(params[:id])
  end

  #User Signup
  def create
    @user = User.new(user_params)
    @user.session_token = User.generate_session_token
    if @user.save
      render "api/users/show"
    else
      @errors = @user.errors.full_messages
      render json: { message: @errors}, status: 401
    end
    debugger
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :firstName, :lastName)
  end

end
