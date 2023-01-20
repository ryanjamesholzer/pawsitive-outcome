# PAWSITIVE OUTCOME

- Triston Beason
- Michelle Dang
- Ryan Holzer
- Angel Sierra
- Kramer Smith


Pawsitive Outcome – gotta adopt 'em all.


## Design

- [API design](docs/api-design.md)
- [Data model](docs/data-models.md)
- [GHI](docs/ghi.md)



## Functionality

- This site is built for employees at a dog adoption center.
- If the employee is new, they are able to sign up by creating an account. This automatically logs them in.
- Once logged in, employees are able use the full functionality of the application:
  - View all dogs available for adoption
  - Add a dog to the list of unadopted dogs
  - View the details of any/all unadopted dogs
  - Complete an adoption form to rehome a dog
  - View adoption records for Pawsitive Outcome
  - If any dog or adoption was created by mistake, these actions can be undone with the click of a button
  - When finished, employee is able to logout, returning user to the login page


## Project Initialization

To run this application on your local machine, please make sure to follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run `docker volume create postgres-data`
4. Run `docker compose build`
5. Run `docker compose up`
6. Visit http://localhost:3000/login in your browser
7. Click "Sign Up" to create an account
8. Navigate the pages as you please, creating dogs and adoptions



## How to complete the initial deploy

There will be further guidance on completing the initial
deployment, but it just consists of these steps:

### Setup GitLab repo/project

* make sure this project is in a group. If it isn't, stop
  now and move it to a GitLab group
* remove the fork relationship: In GitLab go to:

  Settings -> General -> Advanced -> Remove fork relationship

* add these GitLab CI/CD variables:
  * PUBLIC_URL : this is your gitlab pages URL
  * PAWSITIVE_SERVICE_API_HOST: enter "blank" for now

#### Your GitLab pages URL

You can't find this in GitLab until after you've done a deploy
but you can figure it out yourself from your GitLab project URL.

If this is your project URL

https://gitlab.com/GROUP_NAME/PROJECT_NAME

then your GitLab pages URL will be

https://GROUP_NAME.gitlab.io/PROJECT_NAME

### Create render.com account and application

* create account on render.com
* one person create a group and invite all other members
* create a new "Web Service"
  * authenticate with GitLab and choose your project
  * Enter fields:
    * Name: name of your service
    * Root Directory: the directory of your service in your git repo.
      For this example use "pawsitive_service".
    * Environment: Docker
    * Plan Type: Free
  * click the "Create Web Service" button to create it
  * the build will succeed and it will look like the server is running,
    most likely, in 6-10 minutes, it will fail.
  * click "Manual Deploy" -> "Deploy latest commit" and the service
    should deploy successfully.

### Update GitLab CI/CD variables

Copy the service URL for your new render.com service and then paste
that into the value for the PAWSITIVE_SERVICE_API_HOST CI/CD variable
in GitLab.

### Deploy it

Merge a change into main to kick off the initial deploy. Once the build pipeline
finishes you should be able to see an "under construction" page on your GitLab
pages site.


## Install Extensions

* Prettier: <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>
* Black Formatter: <https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter>
