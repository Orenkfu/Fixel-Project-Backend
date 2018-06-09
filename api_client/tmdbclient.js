const Request = require("request");
const movieDao = require('../mongo_dal/movies-dao')
const { Movie, validate } = require('../models/movie');


const key = 'api_key=d3937f004d701f1cb4c4b659a6ae6366';

function getMovies() {
    Request.get(`https://api.themoviedb.org/3/discover/movie?${key}&primaryreleasedate.gte=2016-01-01`, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        const json = JSON.parse(body);
        //  let movies = result.results;
        json.results.forEach(movie => {
            validate(movie);
            movieDao.saveMovie(movie);
        });
    });
}


module.exports.populateMovies = getMovies;