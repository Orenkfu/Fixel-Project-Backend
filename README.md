# Fixel-Project-Backend

A small web app for purchasing movie tickets, connecting to TMDB API remotely and to a local Mongo database.

## Features

* Simple auth system using JWT.

* Connects to TMDB API and reads from a large database of movies.

* Presents movies as a media list using Angular6 and Bootstrap

* Simple sorting system allows viewing of movies by release date, movie title, or the date they were stored in the store database.

* Responsive.

* An admin user can search directly in TMDB and add any movies to local store, as well as delete existing movies.

* A fake purchase button which adds an Order document to local database, no payment system.

* Ability to click on any movie existing in local DB to get more details about it straight from TMDB API.

## Deploy

* App is deployed to Heroku: https://fast-shelf-26119.herokuapp.com/

* To run locally, 'npm install' first, and then 'npm start'.


### Known issues:

* Bug with token expiration date. will be fixed ASAP.

* Logging user requests to Database is not well enough implemented, should use morgan library for a better implementation.

* Movie sorting is under-developed and needs to be worked on.

* For a better looking and scaling app, should use a nav bar. also, then there'll be somewhere to stick the Log Out button.
