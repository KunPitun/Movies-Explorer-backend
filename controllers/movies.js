const Movie = require('../models/movie');
const NotFoundError = require('../errors/not-found-error');
const InternalServerError = require('../errors/internal-server-error');
const BadRequestError = require('../errors/bad-request-error');
const ForbiddenError = require('../errors/forbidden-error');

const badRequestErrorMessage = 'Некорректный _id';
const notFoundErrorMessage = 'Фильм с данным _id не найден';
const internalServerErrorMessage = 'Ошибка на стороне сервера';
const forbiddenErrorMessage = 'Недостаточно прав для выполнения данного действия';

module.exports.getMyMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send({ data: movies }))
    .catch(() => {
      next(new InternalServerError(internalServerErrorMessage));
    });
};

module.exports.createMovie = (req, res, next) => {
  const {
    nameRU,
    nameEN,
    thumbnail,
    trailerLink,
    image,
    description,
    year,
    duration,
    director,
    country,
    movieId,
  } = req.body;
  Movie.create({
    nameRU,
    nameEN,
    thumbnail,
    trailerLink,
    image,
    description,
    year,
    duration,
    director,
    country,
    owner: req.user._id,
    movieId,
  })
    .then((movie) => res.send({ data: movie }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(err.message));
        return;
      }
      next(new InternalServerError(internalServerErrorMessage));
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .orFail(() => {
      throw new NotFoundError(notFoundErrorMessage);
    })
    .then((movie) => {
      if (movie.owner.toString() === req.user._id) {
        movie.remove()
          .then((deletedMovie) => res.send({ data: deletedMovie }));
      } else {
        throw new ForbiddenError(forbiddenErrorMessage);
      }
    })
    .catch((err) => {
      if (err.name === 'ForbiddenError') {
        next(err);
        return;
      }
      if (err.name === 'NotFoundError') {
        next(err);
        return;
      }
      if (err.name === 'CastError') {
        next(new BadRequestError(badRequestErrorMessage));
        return;
      }
      next(new InternalServerError(internalServerErrorMessage));
    });
};
