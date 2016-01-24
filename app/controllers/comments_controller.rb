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
    binding.pry
    @comment = @commentable.comments.build(comment_params)
    @question = Question.find_by(id: params[:question_id])
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
    comment_params = params.require(:comment).permit(:content, :user_id)
    if current_user
      comment_params[:user_id]=@user.id
      return comment_params
    end
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