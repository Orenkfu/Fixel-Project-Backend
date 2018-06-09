const express = require('express');
const Joi = require('joi');
const router = express.Router();
const { Movie, validate } = require('../models/movie');
const movieDao = require('../mongo_dal/movies-dao');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/:id', async (req, res) => {

    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    res.send(movie);
}
);
//create movie
router.post('/', [auth, admin], async (req, res) => {
    const movie = req.body;
    //validation + validation hacks
    delete movie._id;
    delete movie.__v;
    const { error } = validate(movie);
    if (error) return res.status(400).send('Cannot add this movie.');

    //this is a hack because I made a mistake fitting my createMovie method to take a tmdb movie object.
    movie.id = movie.tmdbId;
    const newMovie = await movieDao.saveMovie(movie);
    res.send(newMovie);
});
//delete movie..
router.delete('/:id', [auth, admin], async (req, res) => {

    const movie = await movieDao.deleteMovie(req.params.id);
    if (!movie) res.send.status(404).send('The movie with the given ID was not found.')

    res.send(movie);

});

//get all movies by descending release date
router.get('/', [auth], async (req, res) => {
    const movies = await Movie.find().sort({ 'release_date': -1 });
    res.send(movies);
});



module.exports = router;