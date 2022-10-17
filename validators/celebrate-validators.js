const { celebrate, Joi } = require('celebrate');
const urlValidator = require('./url-validator');
const hexValidator = require('./hexadecimal-validator');
const nameValidator = require('./name-validator');
const descriptionValidator = require('./description-validator');
const yearValidator = require('./year-validator');
const nameEnValidator = require('./nameEN-validator');
const nameRuValidator = require('./nameRU-validator');
const directorValidator = require('./director-validator');
const countryValidator = require('./country-validator');

module.exports.updateUserValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .custom(nameValidator, 'name validation'),
    email: Joi.string().required().email(),
  }),
});

module.exports.movieIdValidator = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().alphanum().length(24)
      .custom(hexValidator, 'hex validation'),
  }),
});

module.exports.createMovieValidator = celebrate({
  body: Joi.object().keys({
    nameRU: Joi.string().required().max(130)
      .custom(nameRuValidator, 'nameRU validation'),
    nameEN: Joi.string().required().max(130)
      .custom(nameEnValidator, 'nameEN validation'),
    thumbnail: Joi.string().required().custom(urlValidator, 'url validation'),
    trailerLink: Joi.string().required().custom(urlValidator, 'url validation'),
    image: Joi.string().required().custom(urlValidator, 'url validation'),
    description: Joi.string().required().min(100).max(1000)
      .custom(descriptionValidator, 'description validation'),
    year: Joi.string().required().min(4).max(10)
      .custom(yearValidator, 'year validation'),
    duration: Joi.number().required(),
    director: Joi.string().required().min(2).max(30)
      .custom(directorValidator, 'director validation'),
    country: Joi.string().required().min(3).max(58)
      .custom(countryValidator, 'country validation'),
  }),
});

module.exports.loginValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.registerValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});
