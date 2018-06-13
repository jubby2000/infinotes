class Api::TagsController < ApplicationController
  def index
    debugger
    @tags = Tag.all
    render :index
  end

  def show
    @tag = Tag.find(params[:id])
    render :show
  end

  def new
    @tag = Tag.new
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save 
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
    @tag = Tag.find(params[:id])
    if @tag.update(tag_params)
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    if Tag.destroy(@tag.id)
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def tag_params
    params.require(:tag).permit(:name)
  end
end
