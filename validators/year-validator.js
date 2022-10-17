const { yearValidationErrorMessage } = require('./validation-messages');

module.exports = (value, helpers) => {
  const regexStr = `[0-9годyear \\.]{${value.length}}`;
  const regex = new RegExp(regexStr, 'i');
  const regexNumber = /[0-9]{4}/i;
  const yearInValue = Number(value.match(regexNumber)[0]);
  const yearNow = Number(Date().match(regexNumber)[0]);
  if (regex.test(value) && regexNumber.test(value)
    && (yearInValue >= 1985) && (yearNow >= yearInValue)) {
    if (helpers) {
      return value;
    }
    return true;
  }
  if (helpers) {
    return helpers.message(yearValidationErrorMessage);
  }
  return false;
};
