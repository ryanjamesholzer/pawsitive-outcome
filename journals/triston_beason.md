### January 4, 2023

Today, I worked on:

* Getting docker files configurated and setting up the app(pawsitive_service) folder

We worked on getting the docker-compose.yaml configured to right database, fastapi, and ghi. We add two additional folders, gitattributes and pawsitive_service. Together we assembled the Dockerfile and Dockerfile.dev in pawsitive_service.

Today, I learned that docker-compose.yaml configuration is not much different when using FastAPI as an web framework instead of Django.
The only difference is in our postgres we had to set an username, password, and database name. Then in our FastAPI we had to set those values in the Database url.
