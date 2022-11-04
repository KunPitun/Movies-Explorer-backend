const mongoose = require('mongoose');
const validator = require('validator');
const {
  urlValidationErrorMessage,
  movieSchemaNameRuRequiredErrorMessage,
  movieSchemaNameEnRequiredErrorMessage,
  movieSchemaOwnerRequiredErrorMessage,
  moviesSchemaThumbnailRequiredErrorMessage,
  moviesSchemaDescriptionRequiredErrorMessage,
  moviesSchemaTrailerLinkRequiredErrorMessage,
  moviesSchemaImageRequiredErrorMessage,
  moviesSchemaYearRequiredErrorMessage,
  moviesSchemaDurationRequiredErrorMessage,
  moviesSchemaDirectorRequiredErrorMessage,
  moviesSchemaCountryRequiredErrorMessage,
  moviesSchemaMovieIdRequiredErrorMessage,
} = require('../utils/messages');

const movieSchema = new mongoose.Schema({
  nameRU: {
    type: String,
    required: [true, movieSchemaNameRuRequiredErrorMessage],
  },
  nameEN: {
    type: String,
    required: [true, movieSchemaNameEnRequiredErrorMessage],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, movieSchemaOwnerRequiredErrorMessage],
  },
  thumbnail: {
    type: String,
    required: [true, moviesSchemaThumbnailRequiredErrorMessage],
    validate: [validator.isURL, urlValidationErrorMessage],
  },
  trailerLink: {
    type: String,
    required: [true, moviesSchemaTrailerLinkRequiredErrorMessage],
    validate: [validator.isURL, urlValidationErrorMessage],
  },
  image: {
    type: String,
    required: [true, moviesSchemaImageRequiredErrorMessage],
    validate: [validator.isURL, urlValidationErrorMessage],
  },
  description: {
    type: String,
    required: [true, moviesSchemaDescriptionRequiredErrorMessage],
  },
  year: {
    type: String,
    required: [true, moviesSchemaYearRequiredErrorMessage],
  },
  duration: {
    type: Number,
    required: [true, moviesSchemaDurationRequiredErrorMessage],
  },
  director: {
    type: String,
    required: [true, moviesSchemaDirectorRequiredErrorMessage],
  },
  country: {
    type: String,
    required: [true, moviesSchemaCountryRequiredErrorMessage],
  },
  movieId: {
    type: Number,
    required: [true, moviesSchemaMovieIdRequiredErrorMessage],
  },
});

module.exports = mongoose.model('movie', movieSchema);
