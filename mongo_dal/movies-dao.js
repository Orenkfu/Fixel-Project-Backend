const mongoose = require('mongoose');
const { Movie, validate } = require('../models/movie')

async function getMovies() {
    try {

        return await Movie.find().sort('release_date');

    } catch (error) {
        console.log(error)
    }
}

async function deleteMovie(id) {
    try {
        console.log(id);
        const movie = await Movie.findById(id);
        console.log(movie);
        if (!movie) return null;
        const result = await Movie.deleteOne({ _id: movie.id })
        console.log(result);
        if (result.ok = 1) return movie;
        else return null;
    } catch (ex) {
        return ex.message;
    }
}
async function getMovie(id) {
    try {

        return await Movie.findById(id);
    } catch (error) {
        console.log(error)
    }
}
async function saveMovie(movie) {
    const newMovie = new Movie({
        tmdbId: movie.id,
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        poster_path: movie.poster_path
    });

    return await newMovie.save();
}
module.exports.saveMovie = saveMovie;
module.exports.getMovies = getMovies;
module.exports.getMovie = getMovie;
module.exports.deleteMovie = deleteMovie; 
