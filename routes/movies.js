const router = require('express').Router();
const { movieIdValidator, createMovieValidator } = require('../validators/celebrate-validators');
const { getAllMovies, deleteMovie, createMovie } = require('../controllers/movies');

router.get('/', getAllMovies);
router.post('/', createMovieValidator, createMovie);
router.delete('/:movieId', movieIdValidator, deleteMovie);

module.exports = router;
