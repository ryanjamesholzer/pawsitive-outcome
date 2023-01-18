### January 17, 2023

Today I worked on:

* Updated AddDog. Added createAdoption, showAdoption, and getAdoption to the Redux store.

Angel drove today while we worked on updating the addDog form and adding builders to the Redux store. Getting better acquainted with the Redux store gives me more confidence in how Redux works. I enjoy working with my group. They not only make you feel more confident but help you better understand the code you were confused about.

Today, I learned that you can consolidate all your Redux builders from separate files into one.
### January 10, 2023

Today, I worked on:

* Passing the user token to other components.

We got stuck with trying how to transferring the token to our dogs list for authorization. The token was constantly saying null even though we were passing the token through as a prop. We later read in the documentation that we should not pass it as a prop, but use it as a hook and set it in our component. In the documentation, it tells us import from our file that has useAuthContext which has our token set. Use the useAuthContext just like useState.

Today, I learned that read documentation is really IMPORTANT!

### January 6, 2023

Today, I worked on:

* Setting up authentication, authorization, and updating adoption models

Implementing authentication and authorization for our routers was not as troublesome as we would expect, even though we had some bumps in the road. Updating the AdoptionOut model wasn't too troubling, but the queries that required AdoptionOut need a complete altering. We successfully implemented the changes that need to be completed. With that done, we tested every route just to be sure that everything worked properly.

Today, I learned how to transverse the data from the database to FastAPI web frame.

### January 4, 2023

Today, I worked on:

* Getting docker files configured and setting up the app(pawsitive_service) folder

We worked on getting the docker-compose.yaml configured to right database, FastAPI, and ghi. We add two additional folders, gitattributes and pawsitive_service. Together we assembled the Dockerfile and Dockerfile.dev in pawsitive_service.

Today, I learned to properly connect the single FastAPI service to the postgres database.
