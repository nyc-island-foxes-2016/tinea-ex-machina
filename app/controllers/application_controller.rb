class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery

  before_filter :generate_blank_user

  helper_method :current_user
  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def authorize_user!
    redirect_to new_admin_session_path unless current_user.present?
  end

  def login user
    session[:user_id] = user.id
  end

  def generate_blank_user
    @user = User.new
  end
end
