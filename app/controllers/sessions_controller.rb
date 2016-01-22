class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by(email: params[:user][:email])
    if @user and @user.password == params[:user][:password]
      session[:user_id] = @user.id
      redirect_to root_path
    else
      render :new
    end
  end

  def delete
    session.clear
    redirect_to root_path
  end
end
