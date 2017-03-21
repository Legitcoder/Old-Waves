class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception


  def current_user
    @current_user = User.find_by(session_token: session[:session_token])
  end

  def enter_session(user)
    user.reset_session_token
    session[:session_token] = user.session_token
  end

  def logout
    current_user.session_token.destroy_all
    reset_session
  end


end
