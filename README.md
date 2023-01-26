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


## Intended Market

- Adoption centers looking to consolidate their business operations to a single page application


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


## Test
- pawsitive_service/tests/test_create_dog.py - Triston Beason
- pawsitive_service/tests/test_list_dogs.py - Ryan Holzer
- pawsitive_service/tests/test_create_adoption.py - Kramer Smith
- pawsitive_service/tests/test_list_adoptions.py - Angel Sierra
- pawsitive_service/tests/test_show_adoption.py - Michelle Dang
