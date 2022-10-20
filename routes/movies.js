const router = require('express').Router();
const { movieIdValidator, createMovieValidator } = require('../validators/celebrate-validators');
const { getMyMovies, deleteMovie, createMovie } = require('../controllers/movies');

router.get('/', getMyMovies);
router.post('/', createMovieValidator, createMovie);
router.delete('/:movieId', movieIdValidator, deleteMovie);

module.exports = router;
