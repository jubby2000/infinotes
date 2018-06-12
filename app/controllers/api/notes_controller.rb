class Api::NotesController < ApplicationController
  def index
    # notebooks = Notebooks.where(user_id: current_user.id, select: "id")
    # @notes = Note.where(notebook_id: notebooks)
    if params.include?(:notebook_id)
      @notes = current_user.notes.where(notebook_id: params[:notebook_id])
    else
      @notes = current_user.notes
    end
    render :index
  end
  
  def new
    @note = Note.new
  end

  def show
    @note = Note.find(params[:id])
    render :show
  end

  def create
    @note = Note.new(note_params)
    @note.notebook_id = params[:notebook_id]
    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find(params[:id])
    if @note.update(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find(params[:id])
    if Note.destroy(@note.id)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def note_params
    params.require(:note).permit(:title, :body)
  end
end
