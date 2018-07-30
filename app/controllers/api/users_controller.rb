class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      Notebook.create({title: "Default Notebook", user_id: @user.id})
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # def destroy
  #   debugger
  # end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end