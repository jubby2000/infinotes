class Api::NotebooksController < ApplicationController
  def index
    @notebooks = Notebook.all
    render :index
  end

  def show
    @notebook = Notebook.find(params[:id])
    render :show
  end

  def new
    @notebook = Notebook.new
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.user_id = current_user.id
    if @notebook.save 
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
    @notebook = Notebook.find(params[:id])
    if @notebook.update(notebook_params)
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = Notebook.find(params[:id])
    if Notebook.destroy(@notebook.id)
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def notebook_params
    params.require(:notebooks).permit(:title)
  end
end
