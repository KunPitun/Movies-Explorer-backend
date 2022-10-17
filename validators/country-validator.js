const { countryValidationErrorMessage } = require('./validation-messages');

module.exports = (value, helpers) => {
  const regexStr = `[а-яa-z '’\\-]{${value.length}}`;
  const regex = new RegExp(regexStr, 'i');
  const isValid = regex.test(value);
  if (helpers) {
    if (isValid) {
      return value;
    }
    return helpers.message(countryValidationErrorMessage);
  }
  return isValid;
};