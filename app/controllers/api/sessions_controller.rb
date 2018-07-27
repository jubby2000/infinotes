class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid credentials'], status: 401
    end
  end

  def destroy
    # if current_user && current_user.username == "hgranger"
    #   # debugger
    #   # demoUser = current_user
    #   logout
    #   render json: {}
    #   current_user.destroy
    #   Rails.application.load_seed
    if current_user
      logout
      render json: {}
    else
      render json: ["No currently logged in user"], status: 404
    end
  end
end