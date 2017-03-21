class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      enter_session(@user)
      render @user
    else
      render json: { message: ["Invalid Credentials"]}, status: 401
    end
  end

  def destroy
    logout
  end

end
