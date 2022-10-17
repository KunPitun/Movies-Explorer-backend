const mongoose = require('mongoose');
const validator = require('validator');
const descriptionValidator = require('../validators/description-validator');
const yearValidator = require('../validators/year-validator');
const nameEnValidator = require('../validators/nameEN-validator');
const nameRuValidator = require('../validators/nameRU-validator');
const directorValidator = require('../validators/director-validator');
const countryValidator = require('../validators/country-validator');
const {
  yearValidationErrorMessage,
  urlValidationErrorMessage,
  nameRuValidationErrorMessage,
  nameEnValidationErrorMessage,
  directorValidationErrorMessage,
  descriptionValidationErrorMessage,
  countryValidationErrorMessage,
} = require('../validators/validation-messages');

const movieSchema = new mongoose.Schema({
  nameRU: {
    type: String,
    maxlength: [130, 'Название фильма должно быть не более 130-и символов'],
    required: [true, 'Не указано название на русском'],
    validate: [nameRuValidator, nameRuValidationErrorMessage],
  },
  nameEN: {
    type: String,
    maxlength: [130, 'Название фильма должно быть не более 130-и символов'],
    required: [true, 'Не указано название на английском'],
    validate: [nameEnValidator, nameEnValidationErrorMessage],
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
    minlength: [100, 'Описание фильма должно быть не менее 100-а символов'],
    maxlength: [1000, 'Описание фильма должно быть не более 1000-и символов'],
    validate: [descriptionValidator, descriptionValidationErrorMessage],
  },
  year: {
    type: String,
    required: [true, 'Не указан год выпуска'],
    minlength: [4, 'Год выпуска должен быть не менее 4-х символов'],
    maxlength: [9, 'Год выпуска должен быть не более 9-и символов'],
    validate: [yearValidator, yearValidationErrorMessage],
  },
  duration: {
    type: Number,
    required: [true, 'Не указана длительность'],
  },
  director: {
    type: String,
    required: [true, 'Не указан режиссёр'],
    minlength: [2, 'Имя режиссёра должно быть не меньше 2-х символов'],
    maxlength: [30, 'Имя режиссёра должно быть не более 30-и символов'],
    validate: [directorValidator, directorValidationErrorMessage],
  },
  country: {
    type: String,
    required: [true, 'Не указана страна'],
    minlength: [3, 'Название страны должно быть не меньше 3-х символов'],
    maxlength: [58, 'Название страны должно быть не более 58-и символов'],
    validate: [countryValidator, countryValidationErrorMessage],
  },
});

module.exports = mongoose.model('movie', movieSchema);
