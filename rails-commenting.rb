# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is a controller called BlogPosts it inherits from a class called ApplicationController. This means that the BlogPosts will have access to all the methods and functionality in ApplicationController. Its purpose is to manage the routing of the application. The functionality is to control the interaction between the MVC.
class BlogPostsController < ApplicationController
  def index
    # ---2) Creates an instance variable that will store a list of ALL the data entries from inside of the model. 
    @posts = BlogPost.all
  end

  # ---3) 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      redirect_to blog_posts_path
    end
  end

  # ---9)
  private
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content)
  end
end
