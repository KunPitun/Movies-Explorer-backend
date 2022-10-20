const mongoose = require('mongoose');
const validator = require('validator');
const {
  urlValidationErrorMessage,
} = require('../validators/validation-messages');

const movieSchema = new mongoose.Schema({
  nameRU: {
    type: String,
    required: [true, 'Не указано название на русском'],
  },
  nameEN: {
    type: String,
    required: [true, 'Не указано название на английском'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Не указан владелец'],
  },
  thumbnail: {
    type: String,
    required: [true, 'Не указан мини-постер'],
    validate: [validator.isURL, urlValidationErrorMessage],
  },
  trailerLink: {
    type: String,
    required: [true, 'Не указан трейлер'],
    validate: [validator.isURL, urlValidationErrorMessage],
  },
  image: {
    type: String,
    required: [true, 'Не указан постер'],
    validate: [validator.isURL, urlValidationErrorMessage],
  },
  description: {
    type: String,
    required: [true, 'Не указано описание'],
  },
  year: {
    type: String,
    required: [true, 'Не указан год выпуска'],
  },
  duration: {
    type: Number,
    required: [true, 'Не указана длительность'],
  },
  director: {
    type: String,
    required: [true, 'Не указан режиссёр'],
  },
  country: {
    type: String,
    required: [true, 'Не указана страна'],
  },
  movieId: {
    type: Number,
    required: [true, 'Не указан ID фильма'],
  },
});

module.exports = mongoose.model('movie', movieSchema);
