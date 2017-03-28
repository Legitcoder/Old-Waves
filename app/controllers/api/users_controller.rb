class Api::UsersController < ApplicationController

  #Show all community of users through navigation
  def index
  end

  #Show individual user(listener) page
  def show
  end

  #User Signup
  def create
    @user = User.new(user_params)
    debugger
    if @user.save
      render "api/users/show"
    else
      @errors = @user.errors.full_messages
      render json: { message: @errors}, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :firstName, :lastName)
  end

end
