# Assignment 2 - Web API.

Name: Brona Keevers

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Added the rest of the tmdb fetches to the api
 + Added favourites database with user specific data that can be added and deleted
 + Fully integrated the frontend with the api
 + All routes are protected except the login and signup pages

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

.env file in the api
______________________
NODEENV=development
PORT=8080
HOST=localhost
MONGO_DB=YourMongoURL
TMDB_KEY=YourTMDBApiKey
SECRET=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies/tmdb/movies?page=${page} | GET | Gets a list of discover movies 
- /api/movies/tmdb/upcoming?page=${page} | GET | Gets a list of upcoming movies 
- /api/movies/tmdb/trending?page=${page} | GET | Gets a list of trending movies 
- /api/movies/tmdb/top_rated?page=${page} | GET | Gets a list of top rated movies 
- /api/movies/tmdb/now_playing?page=${page} | GET | Gets a list of now playing movies 
- /api/movies/tmdb/movie?id=${id} | GET | Gets details of a single movie from its id
- /api/movies/tmdb/movie/credits?id=${id} | GET | Gets the credits for a single movie from its id
- /api/movies/tmdb/movie/recommendations?id=${id} | GET | Gets the recommendations for a single movie from its id
- /api/movies/tmdb/movie/reviews?id=${id} | GET | Gets the reviews for a single movie from its id
- /api/movies/tmdb/genres | GET | Gets the list of movie genres

- /api/movies/tmdb/movie/images?id=${id} | GET | Gets the images for a single movie from its id

- /api/movies/tmdb/actor?id=${id} | GET | Gets the details of an actor from its id
- /api/movies/tmdb/actor/credits?id=${id} | GET | Gets the credits of an actor from its id (the list of movies the actor was in)

- /api/users | GET | Gets all users
- /api/users | POST | Register a new user or authenticate an existing one
- /api/users/:id | PUT | Update a user (i didnt use this one) 

- /api/favourites | GET | Gets all favourited movies
- /api/favourites | POST | Adds a new favourite
- /api/favourites/deleteFav?username=${username}&movieId=${movieId} | DELETE | Removes a movie from a users favourites
- /api/favourites/myFavs?username=${username} | GET | Gets all favourited movies of the current user as an array of just the movie ids


## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

You need to sign into an account to see any of the movie pages, all routes are protected except for the login and signup pages

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

All of my fetches go to the web api.
I also added a favourites mongoDB database which stores user specific data, each user has their own seperate favourites data which can be added to and deleted from.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   

Im not sure if this might have been in one of the lectures and i just missed it but the .distinct in the api seems to be a very useful thing that i discovered online and used in my favorites to filter only the movie ids of a specific username like so: const favourites = await Favourite.distinct('movieId', { username: username })
