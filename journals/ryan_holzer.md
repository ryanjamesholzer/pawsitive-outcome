## January 5, 2023

Today I worked on:

* Setting up router, querey, and migration directories

Triston took the driver's seat today. We started off by creating the tables for our dog and adoption models inside of a migrations file. Once that was done, we imported APIRouter from FastAPI, and created "GET" and "POST" routes for the corresponding tables, writing Querey classes with methods to match the routes. We were then able to create and list dogs and adoptions. Felt good.

Today I learned, as I have so many other times, that the smallest of mistakes can create the largest of errors. However, with five sets of eyes, we were able to isolate any issues we had and correct them.


## January 4, 2023

Today, I worked on:

* Getting the project up and running with with all members of my group

Michelle created a group in GitLab and added all members as maintainers. We updated the repo name and slug, accordingly. All members of the whisker watchers then cloned a local version of the repo and we dove in.

I volunteered to "drive" today, and my group helped as we guided each other through creating Dockerfiles, setting up a database, and defining some naming conventions for the project. Navigating the examples in Learn, versus examples we had seen in explorations, versus what we were shown in lecture proved to be a difficult task. But we made it over the hurdle of day one, our group worked well together, and maintained an overall positive attitude. We managed to finish the project setup, get all containers running, and even see the Swagger UI.

Today I learned specifically how to ensure naming conventions across the entire project, by searching, using a case-sensitive filter, to change all instances referenced in any/all files. I also learned about creating volumes relating to our database using a username, password, and db name.
