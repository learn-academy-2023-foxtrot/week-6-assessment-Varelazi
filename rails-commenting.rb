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

  # ---3) Allows you to see the specific data entries and what they hold. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Creates a new instance of the model, but does not save it to the database. This is where you create a new object and set its attributes.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Creates a new instance/record of the model and saves it to the database. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This looks at the BlogPost database and finds the data entry based on the primary key.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This is used to update a specific record, in this case update a blog post. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) After deleting a data entry, then this will take you to the main page of the database. 
      redirect_to blog_posts_path
    end
  end

  # ---9) Private is used to define a section of methods that are intended to be private and not accessible for handling HTTP requests. 
  private
  def blog_post_params
    # ---10) This is telling the user what they have the ability to add, change, and delete in the database entires. 
    params.require(:blog_post).permit(:title, :content)
  end
end
