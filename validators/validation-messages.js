const yearValidationErrorMessage = 'Год выпуска может быть не менее 1985, не более текущего, содержать только русские буквы гдо, английские aery и символ .';
const urlValidationErrorMessage = 'Некорректный url';
const passwordValidationErrorMessage = 'Пароль может содержать только латинские буквы и символы .,:;?!-\'"’()[]{}«»/№`&*@_+=';
const nameValidationErrorMessage = 'Имя пользователя может содержать только русские и английские буквы, пробелы и символы -\'’';
const nameRuValidationErrorMessage = 'Название фильма на русском может содержать только русские и английские буквы, пробелы и символы .,:;?!-\'"’()[]{}«»/№`&*@_+=';
const nameEnValidationErrorMessage = 'Название фильма на английском может содержать только английские буквы, пробелы и символы .,:;?!-\'"’()[]{}«»/№`&*@_+=';
const directorValidationErrorMessage = 'Имя режиссёра может содержать только русские и английские буквы, пробелы и символы -\'’';
const descriptionValidationErrorMessage = 'Описание фильма может содержать только русские и английские буквы, пробелы и символы .,:;?!-\'"’()[]{}«»/№`&*@_+=';
const countryValidationErrorMessage = 'Название страны может содержать только русские и английские буквы, пробелы и символы -\'’';

module.exports = {
  yearValidationErrorMessage,
  urlValidationErrorMessage,
  passwordValidationErrorMessage,
  nameValidationErrorMessage,
  nameRuValidationErrorMessage,
  nameEnValidationErrorMessage,
  directorValidationErrorMessage,
  descriptionValidationErrorMessage,
  countryValidationErrorMessage,
};
