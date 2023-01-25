## January 24, 2023

Today, I worked on:

* Creating tests and touch ups on css

Today the Whisker Watchers split into two groups to create the tests. Dog tests were dev 1 team and adoptions tests were dev 2 team. Triston wrote create dogs test, Ryan wrote list dogs test, Angel wrote list adoptions test, Kramer wrote create adoptions test, and I wrote the show adoption test. For me, it took a little to get the test working, but my team and I eventually figured it out by putting id as a parameter and putting an adoption_body variable which stores a test data. Before creating the tests, we merged the work Kramer and Triston’s work into main, then touched up on the CSS.

Today, I learned how to make unit tests. It didn’t take too long to figure out what to do, so thankfully we finished it within a few hours. 


## January 23, 2023

Today, I worked on:

* Adding dropdown to adoption list to incorporate with search bar, fixed nav bar, and token 

I drove today for my group. First thing we did was add a dropdown to incorporate it with the search bar. This way, we can filter on what the user types based on the selected option. Next, we fixed the nav bar by showing the links to the list of dogs and list of adoptions only when the user is logged in. Afterwards, we decided to figure out how to make the token automatically go to the login page once the token expires. This ended up being a lot more difficult than we anticipated. After taking some time on it, we decided in the end to make it a stretch goal.

Today, I learned that it’s hard to make an application fool-proof within 4 weeks. My teammates and I are thinking of things to add in our application based on cases for new users who don’t know how to use our website. The token expiring is something that a new user would be confused by, and they wouldn’t know to just go back to the login page to re-login. This is a good way of thinking since we’ll need to think like this in the job, but for our project we can just assume no one will be on the website long enough for the token to expire.

## January 19, 2023

Today, I worked on:

* Creating ConfirmationModal, moved AddDog to ListDogs and implementing search filter

I drove for my group today. In terms of functionality, we finished everything today by adding a ConfirmationModal which pops up before an employee removes a dog or undos an adoption. We also implemented a search filter so we can easily search for a specific dog. We were going to transition into tailwind, but we realized with the amount of time we have left, it’ll be best to stick with bootstrap and make the best out of the project with out. We ended off the night with finalizing the webpage design, which we made a draft during the first week of Module 3.

Today, I learned that it can be easy to get carried away with new ideas that come through while working on a project. The idea of a toast alert came along, and we almost went through with it, but then we realized we can always save it for a stretch goal. Once we finish with the designs, then maybe we can add a toast alert.

## January 18, 2023

Today, I worked on:

* Change SignUpForm to a modal, implement update and delete dog, and debugging

Triston drove today. We made our sign up form into a modal in our login page. This is so we don’t need to redirect to a signup page in the application. We also decided to complete the crud functions by implementing an update and delete for the dogs, so we can remove a dog from the dog list, and we can update the dog’s is_adopted boolean value to true or false depending if they’re adopted or not. Throughout today, we had a lot of minor mistakes and bugs that took us awhile to fix. The main one was deleting an adoption, it kept on giving us a CORS error and we didn’t know why. We thought it had to do something with the headers since that’s the common answer we got from google, but it turned out we just didn’t pass the dog id to delete the adoption. 

Today, I learned that it might be more beneficial to take a break rather than sit for hours trying to figure out what the problem is. The latter might seem more productive to do, but I think in our situation it would’ve been better to get a small break to refresh our brains, so we can return with a clearer mind, which can help with problem solving. I think it especially helps if it’s a minor error that’s hard to detect when you’ve been looking at a screen for hours on end. I’ll be sure to use this tip in the future.

## January 17, 2023

Today, I worked on:

* Adding post queries to redux store and added password confirmation

Angel drove today while we added post queries to the redux store. We consolidated the query builder into pawsitiveApi. We ran into an issue with AddDog, so we updated the file so it would pop up a required field error if nothing was written. Lastly, we added a password confirmation field.

Today, I learned that we need to think about test cases to ensure it passes through every scenario. When we were testing out the SignUp form with a password confirmation, it didn't work at first since we used a username that was already in our database. Since we didn't make an error handle for it, it threw an error on the console and made it seem like what we coded didn't work. We realized a minute later it was because we used the username "hello" already. Because of this, tomorrow we plan to make an error handling for existing usernames.


## January 13, 2023

Today, I worked on:

* Implementing Redux in our authentication

Ryan drove today and the rest of the team were navigators. We implemented Redux in our authentication with tokens. Before, we had to import our useToken file and useAuthContext function into every file that needed a token. 
This became repetitve and inefficient, so we decided to switch to Redux so our JWT tokens will become global. 

Today, I learned that Redux is extremely useful to use. Our team initially thought about incorporating Redux as a stretch goal, but once we saw examples of how to use and saw how much cleaner it looks, we decided to give it a shot. This also taught me to always think about other options that could possibly make your code more legible and efficient. 


## January 11, 2023

Today, I worked on:

* Implementing the logout feature and update the is_adopted field in dogs table

Everyone worked together today to implement the logout feature and update the dogs table. I drove and the rest of my teammates navigated. We updated the is_adopted field so it's defaulted to false when adding a dog and we removed the not null. 

While working on the logout feature, it was challenging to get the logout button to work properly. The button would work once we refreshed, which isn't what we were going for. We went to Cooper for help and we finally got it working once we imported useToken to LoginForm, SignUpForm, and Nav.

Today, I learned more about authentication tokens. I thought it was going to be a breeze today to get the logout to work since it was working on Swagger, but I was proven wrong.


## January 10, 2023

Today, I worked on:

* Merging branches to main 

The Whisker Watchers came back together to merge our branches together and deal with the merge conflicts. Triston drove for the first half to make sure there are no conflicts with dev_1 and main branch. Kramer drove second half for dev-branch, and completed the autherization for the ListDogs once you login or sign up. 

Today, I learned how to work with authorization tokens. Dev_1 team worked on it yesterday, so dev-2 team got a chance to see how it looked. I thought it was a lot to learn, but I think it'll be useful to know.


## January 9, 2023
 
Today, I worked on:
 
* Making Nav, ListDogs, AddDogs, DogDetailModal React files
 
The Whisker Watchers have split into two groups for the React portion of Pawsitive Outcome. Kramer and I worked on the dev-2 branch, which is responsible for listing and adding dogs, creating the modals, and populating the Nav file. Kramer is the driver and I navigated. We finished the majority of the functional portion, we just need to figure out how to get the toggle button working for the Nav file. We plan to save the styling portion for another day.
 
Today, I learned how to make modals from React Bootstrap. Since we wanted it based on the dog's id, it took a bit to make it work, but we got it to work in the end.


## January 5, 2023

Today, I worked on:

* Setting up migration directories, routers, queries, and models

Before lunch, I drove and we set up the dog table and adoption table in the migrations file. We also set up the pgadmin page to make sure the tables synced. Triston drove after lunch and we set up the routers and queries for dogs and adoptions. We finished the dog routers and queries, and majority of the routers and queries for adoptions. We plan to finish the last portion of the adoption router and queries tomorrow.

Today, I learned how to set up pgadmin. This is everyone's first time, so it's something new for all of us. I'm looking forward to using it for this project.


## January 4, 2023

Today, I worked on:

* Setting up project with teammates

I set up the whisker watchers group in Gitlab and invited my teammates
to the group, forked and cloned Project Gamma, which we changed the project name to, "Pawsitive Outcome". Ryan was the driver for today and my teammates and I helped navigate by looking for resources on Learn. Some of the resources we used were sample code from yesterday's lecture, the project advice tab on Learn, and the FastAPI videos from winter break packet. We used the FastAPI videos from the winter break packet and the example from yesterday's lecture to create the dockerfiles and set up the database. We finished with making an api-design.md file, which we will update in the future. 

Today, I learned how to make groups in Gitlab. I assumed the process was going to be the same as it was for Module 2 project where I just fork and clone the project to my namespace, then add my teammates on there. It was just an additional step of creating a new group and inviting my teammates on there first, then I fork the project under my group's name space. This will be good to know in the job since we will be working with a group majority of the time.
