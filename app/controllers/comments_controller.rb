class CommentsController < ApplicationController

  def show
    @comment = Comment.find(params[:id])
  end

  def new
    @commentable = find_commentable
    @comment = Comment.new
  end

  def create
    @commentable = find_commentable
    @comment = @commentable.comments.new(params[:comment])
    @question = Question.find_by(question_id: params[:question_id])
   if @comment.save
      flash[:success] = "Successfully saved comment."  
      redirect_to @question
    else
      render :new
    end
  end


  def destroy
    @comment = @commentable.comment.find_by(id: params[:id])
    @comment.destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :user_id)
  end

  def find_commentable
    params.each do |name, value|
      if name =~ /(.+)_id$/
        return $1.classify.constantize.find(value)
      end
    end
    nil
  end


end