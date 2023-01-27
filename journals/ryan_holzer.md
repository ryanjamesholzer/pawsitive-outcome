## January 27

Today I worked on:

* Finalizing our project for submission.

Angel drove for our final work day, as we set out to clean up our code, finalize CI/CD, and fully test our application. To start, we searched for any code that wasn’t being used, for and any stray print statements/console logs. We ran into a bug with our alerts when a user inputs invalid information upon sign up or log in. It slowed us down slightly, but after it was resolved we finalized the cleanup. We ended up adding some slight styling changes, including making the cursor a dog that changes stance when hovering over links and buttons. Finally, we managed to get our application deployed successfully with CapRover.

Today I learned that submitting something you’ve worked on for weeks is bittersweet. The entire process has been a learning experience, and I am grateful for my team for making it all fruitful and tolerable.


## January 26

Today I worked on:

* Trying to deploy our application using CapRover.

The last two days, we have been working on the deployment of our application with CapRover. Yesterday, Michelle drove as we set up our variables in GitLab and CapRover, updated our CI.yaml file, and tried our first deploy. In spite of not getting all the way the where, we made some progress and paved the way for today. I drove today, as we spent most of the time troubleshooting and testing our deployment. We still didn’t get there, but we managed to create an account and log in on the backend, and our login page to show up on the front. We also took some time to update our README, and tweak the styling on our sign up modal.

Today I learned that deployment can be complicated. Seeing as we are learning along with the instructors, it has been really interesting to see the process of understanding new technology along side our mentors.


## January 24

Today I worked on:

* Finalizing styles with the group, updating the adoption form, writing tests.

Triston drove this morning, as we merged all changes from individual branches into main. We then updated our logo in the nav bar, styled the adoption form, and tested functionality across the entire application. Once we were all satisfied, we decided to try and write some unit tests. We split into our groups. I wrote a test for the list dogs function, asserting it returned a status code of 200, and a dictionary with the key “dogs” and the value of an empty list. Triston then worked on a test for the create dog function, with assertions to match. Both tests involved authentication, which added another layer of complexity to the test. Once both were passing, we pushed them to the main branch.

Today I learned about unit tests. When creating a mock repo, naming conventions yet again come into play. Everything must match across the application to ensure a lack of errors in testing.


## January 23

Today I worked on:

* Bringing everyone’s work from the weekend into our main branch, and played with our authentication to try and redirect upon the expiration of a cookie.

Michelle drove today, as we worked on merging multiple changes of our application into the main branch. Kramer and Michelle, who had been tweaking the application’s styling on Friday, tied up some loose ends over the weekend. After stand up, we got everything merged together, and added some filtering functionality to the list of adoptions. Now, you can select which field you’d like to input for your search. We had had some issues with our token expiring when spending long days working on the application. This turned out to be a big can of worms, and ended up becoming a stretch goal.

Today I learned that trying to track the state of tokens in real time can get really complicated. We hit a pretty big wall, but also had the wherewithal to know when to say when.


## January 20

Today I worked on:

* Updating the docs directory and README.md file.

Today, we split into pairs. Triston and I set out to tackle some of the adjacent	 work regarding the project requirements. We cleaned up our wireframe, took screenshots and added them to a ghi file. We then updated the api design to reflect the input and output of all of our routes. We also added a file that shows how are tables are setup to show as html tables in GitLab. Finally, we updated the README.md to describe the basics of our application, like how it works and how to run it.

Today I learned that you can create a database file by writing into a markdown, and, if done properly, displays as an HTML table on GitLab.


## January 19

Today I worked on:

* Adding a search filter to the dogs list and moving add dog functionality from the nav bar to the list page.

Michelle drove today, as we worked on wrapping up the functionality of our application before styling it. We finished the list page for unadopted dogs by adding a search bar that filters dogs by name, and moved the add dog modal to activate by the click of a button next to the search bar. After finishing, we created a confirmation alert modal, so the user never deletes a dog or an adoption from the database without confirming via said modal. Finally, we revisited our wireframe, in order to finalize some style choices before diving into Bootstrap.

Today I learned if you start a project using a Bootstrap, it is probably best to stick with Bootstrap. We attempted to switch over to Tailwind mid-project but, seeing as how much of our functionality was build using Bootstrap (primarily our modals), it seemed like taking several steps in the wrong direction before getting things back on track.


## January 18

Today I worked on:

* Adding put and delete queries to our application.

Triston drove today, as we added put and delete functionality our Redux store. We started the day by making the sign up form a modal inside the log in form, which involved some bug catching and resolving. This led to investigating other modals, like add dog. Sure enough, there was another console error regarding changing multiple components at the same time, despite everything working (seemingly) as intended. After resolving that by switching up the order of operations in our code, we decided to implement delete/remove buttons for our detail modals. This led us to a myriad of issues. While, trying to remove an adoption from our records, we wanted to update the is_adopted status of the dog back to false. The case for this would be an adoption that was made by mistake, or cancelled by the adopter.

Today I learned that the order of things really matters, and can really hinder React from doing what it needs to do. I also learned that put/patch requests can be complicated using Redux but, like everything else, it’s all in the details. Making sure every file is receiving the data that it needs, in the specific way it needs, is kind of a no-brainer, but sometimes can get complicated.


## January 17

Today I worked on:

* Adding post queries to the Redux store, with modals for addDog and createAdoption.

Angel drove today, as we set out to tackle "post" RTK queries to add dogs and create adoptions. We ended up consolidating all of our query builders into a single file in order to invalidate tags across different routes/queries. We then created modals to match our post queries, and added a password confirmation field into our sign up form.

Today I learned that consolidating all of your builders and mutations into a single file can help in the functionality of your components. For example, we needed to invalidate the “ListDogs” tag when an adoption was created, and the consolidation immediately solved our issue.


## January 13, 2023

Today I worked on:

* Integrating Redux with our authentication processes across our application.

I drove again today and, as a team, we worked on creating authorization queries with Redux in order to gain global access to our JWT tokens. These newly defined queries would then work in tandem with our RTK queries for the dogs table in our database. After some research, we were able to adapt our code and gain access to protected routes after logging in. When that was finished, we created RTK queries and mutations to access our adoptions table.

Today I learned, yet again, that Redux can greatly improve the cleanliness of your code. Our useToken hook for authorization was verbose and complex. It was replaced relatively easily using Redux.



## January 12, 2023

Today I worked on:

* Adding Redux to our application.

Kramer took the wheel today, as we worked on integrating Redux into our application. After running into some trouble trying to update the state of a component in the nav bar, we decided to create a store to access state on a global level. It took some time and was a bit terrifying but, after getting a query to work, our code within our components was much cleaner and simpler. However, this caused an issue when trying to access our JWT token, which was generated using a custom React hook. Seemed like an issue for another day.

Today I learned that tearing down your work to learn something new (Redux) can be terrifying but, in the end, it was worth it. We all gained knowledge, and our code cleanliness greatly benefitted.


## January 11, 2023

Today I worked on:

* Updating the is_adopted boolean value for dogs when adoptions are created and the logout feature.

We worked as a full group again to brush up on SQL in order to update boolean values within our queries. We were able to create an adoption, and set the is_adopted boolean value to true within the context of the adoption, but the actual dog stored in our database still showed false. This was solved by adapting our SQL code to update the dogs table as well. We then adapted our code from the front-end authorization cook book to add a logout button to the nav bar.

Today I learned that passing props with useContext can be complicated. It took a lot of testing and changing of imports to get our login, logout, and signup features to work.


## January 10, 2023

Today I worked on:

* Getting all of our teams work into the main branch, and testing out our groups’ respective features.

After the standup, we decided to reconcile any differences between our development branches, and start the day fresh. Once everything was merged and reconciled, we wanted to test that our authorization was working for our protected routes. Kramer drove, and we all worked together, as it involved  previous work from both teams. We ended up with some issues retrieving the user’s token across all components. We did manage to fix the issue by importing a useContext hook, which allowed us to access the token within any necessary components. It took a lot of console logs and troubleshooting, but we got everything functioning the way we wanted to.

Today I learned about useContext hooks. This, similar to Redux, was a great way for us to store data globally and import it in any component files where the data would be needed to be accessed. It was a helpful lesson.


## January 9, 2023

Today I worked on:

* Front-end authentication, with login and signup form components

Triston took the driver’s seat today, as we (Triston, Angel, and I) started working on the login and signup features for the application. Following documentation and example code, we were able to write a useToken hook. The custom hook includes functions for logging in a user, logging a user out, and signing up a user. By de-structuring the useToken hook in App.js, we were able to pass the signup and login functions to our components as props. Kramer and Michelle worked together to create the dogs list and dog detail modal.

Today I learned that by declaring and de-structuring a hook on the main level, you are able to pass functions from within the hook to your child components as props. This was extremely useful today, while working on front-end authorization.


## January 6, 2023

Today I worked on:

* Setting up authorization and authentication features

Kramer and Angel drove today. In the morning, we worked on JWTs with Fast API. Following the documentation, we created routes, queries, models, and a table for our accounts. When this was working successfully, we altered our routes for dogs and adoptions to require a token to use them. We also updated our AdoptionOut model to return a dog object as foreign key in the adoption data. This was challenging, but our teamwork made it happen.

Today I learned that sometimes the fields in your out models need to greatly differ from the in models. This can be specified however you like, but you must be careful with what you change, and be sure to update any other files that need to know about the changes made to your models.


## January 5, 2023

Today I worked on:

* Setting up router, query, and migration directories

Triston took the driver's seat today. We started off by creating the tables for our dog and adoption models inside of a migrations file. Once that was done, we imported APIRouter from FastAPI, and created "GET" and "POST" routes for the corresponding tables, writing Querey classes with methods to match the routes. We were then able to create and list dogs and adoptions. Felt good.

Today I learned, as I have so many other times, that the smallest of mistakes can create the largest of errors. However, with five sets of eyes, we were able to isolate any issues we had and correct them.


## January 4, 2023

Today, I worked on:

* Getting the project up and running with with all members of my group

Michelle created a group in GitLab and added all members as maintainers. We updated the repo name and slug, accordingly. All members of the whisker watchers then cloned a local version of the repo and we dove in.

I volunteered to "drive" today, and my group helped as we guided each other through creating Dockerfiles, setting up a database, and defining some naming conventions for the project. Navigating the examples in Learn, versus examples we had seen in explorations, versus what we were shown in lecture proved to be a difficult task. But we made it over the hurdle of day one, our group worked well together, and maintained an overall positive attitude. We managed to finish the project setup, get all containers running, and even see the Swagger UI.

Today I learned specifically how to ensure naming conventions across the entire project, by searching, using a case-sensitive filter, to change all instances referenced in any/all files. I also learned about creating volumes relating to our database using a username, password, and db name.
