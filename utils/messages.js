const urlValidationErrorMessage = 'Некорректный url';
const hexadecimalValidationErrorMessage = 'Строка не соответствует шестнадцатиричной';
const authUnuthorizedErrorMessage = 'Необходима авторизация';
const userBadRequestErrorMessage = 'Некорректный _id';
const userNotFoundErrorMessage = 'Пользователь с данным _id не найден';
const internalServerErrorMessage = 'Ошибка на стороне сервера';
const userConflictErrorMessage = 'Пользователь с данным email уже зарегистрирован';
const moviesBadRequestErrorMessage = 'Некорректный _id';
const moviesNotFoundErrorMessage = 'Фильм с данным _id не найден';
const moviesForbiddenErrorMessage = 'Недостаточно прав для выполнения данного действия';
const userSchemaUnauthorizedErrorMessage = 'Неправильные почта или пароль';
const userSchemaNameRequredErrorMessage = 'Не указано имя';
const userSchemaNameMinlengthErrorMessage = 'Имя пользователя должно быть не меньше 2-х символов';
const userSchemaNameMaxlengthErrorMessage = 'Имя пользователя должно быть не более 30-и символов';
const userSchemaEmailRequiredErrorMessage = 'Не указан email';
const userSchemaEmailValidateErrorMessage = 'Некорректный email';
const userSchemaPasswordRequiredErrorMessage = 'Не указан пароль';
const movieSchemaNameRuRequiredErrorMessage = 'Не указано название на русском';
const movieSchemaNameEnRequiredErrorMessage = 'Не указано название на английском';
const movieSchemaOwnerRequiredErrorMessage = 'Не указан владелец';
const moviesSchemaThumbnailRequiredErrorMessage = 'Не указан мини-постер';
const moviesSchemaDescriptionRequiredErrorMessage = 'Не указано описание';
const moviesSchemaTrailerLinkRequiredErrorMessage = 'Не указан трейлер';
const moviesSchemaImageRequiredErrorMessage = 'Не указан постер';
const moviesSchemaYearRequiredErrorMessage = 'Не указан год выпуска';
const moviesSchemaDurationRequiredErrorMessage = 'Не указана длительность';
const moviesSchemaDirectorRequiredErrorMessage = 'Не указан режиссёр';
const moviesSchemaCountryRequiredErrorMessage = 'Не указана страна';
const moviesSchemaMovieIdRequiredErrorMessage = 'Не указан ID фильма';

module.exports = {
  urlValidationErrorMessage,
  hexadecimalValidationErrorMessage,
  userSchemaUnauthorizedErrorMessage,
  userSchemaNameRequredErrorMessage,
  userSchemaNameMinlengthErrorMessage,
  userSchemaNameMaxlengthErrorMessage,
  userSchemaEmailRequiredErrorMessage,
  userSchemaEmailValidateErrorMessage,
  userSchemaPasswordRequiredErrorMessage,
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
  authUnuthorizedErrorMessage,
  userBadRequestErrorMessage,
  userNotFoundErrorMessage,
  internalServerErrorMessage,
  userConflictErrorMessage,
  moviesBadRequestErrorMessage,
  moviesNotFoundErrorMessage,
  moviesForbiddenErrorMessage,
};
