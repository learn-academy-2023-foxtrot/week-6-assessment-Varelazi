# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: IV

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: In order to fix this you will need to do a migration to add a new column into your second model called Student. Create the migration by typing in your terminal: rails g migration AddForeignID or whatever you want to call your new migration. Then in that migration model add the column. While adding a new column you will need to ensure that you type in the add_column :table_name (which will be your student table model. The model you want your column to be added into) and then :foreign_id_name (this has to be what your model is called when you created the Cohort class. In this case it should be cohort_id) finally you add :data_type 

Researched answer: Start off by generating a migration. In the terminal run: rails g migration NameOfMigration this will allow you to add a column to the student table. Then edit the generated migration file by using add_column :students, :cohort_id, :integer. Make sure to save this by typing: rails db:migrate in the terminal. Finish creating the belongs_to inside the students model, so the Students belongs_to a Cohort. This will allow the foreign key to work!

2. Which RESTful routes must always be passed params?

Your answer: I am not entierely sure what the RESTful routes that must pass params are, but I think it might be the show, create, update, and delete. They all allow for params to be passed.

Researched answer: 

3. Name three rails generator commands. What is created by each?

Your answer: The three rails generator commands are rails g model, rails g migration, and rails g resource. The rails g model creates a table with rows and column to store data. The rails g migrate allows you to make any changes to your model. For example, adding a column or renaming a column. The last one, rails g resource allows you to generate all M(models)V(views)C(controllers) and routes inside of the rails application. 

Researched answer:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Index - This will shows a list of all the resources.

action: "POST" location: /students
Create - Creates a resource in the database

action: "GET" location: /students/new
New - New will render a form to create a resource

action: "GET" location: /students/2
Show - Show will only show one instance of a resource. It will show the resource that includes id 2.

action: "GET" location: /students/2/edit
Edit - Edit will render a form to edit a resource. In this case it will create a form to edit the resource with id 2.

action: "PATCH" location: /students/2
Update - It will update an existing resource

action: "DELETE" location: /students/2
Delete - Will delete a resource. 

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.
