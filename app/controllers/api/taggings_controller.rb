class Api::TaggingsController < ApplicationController
  def index
    @taggings = []
    current_user.notes.each do |note|
      note.taggings.each do |tagging|
        @taggings.push(tagging)
      end
    end
    render :index
  end
  
  def show
    @tagging = Tagging.find(params[:id])
    render :show
  end

  def create
    @tagging = Tagging.new(tagging_params)
    if @tagging.save
      render :show
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  def destroy
    @tagging = Tagging.find(params[:id])
    if Tagging.destroy(@tagging.id)
      render :show
    else
      render json: @tagging.errors.full_messages, status: 422
    end

  end

  def tagging_params
    require(:tagging).permit(:note_id, :tag_id)
  end
end