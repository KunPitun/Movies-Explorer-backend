const { isURL } = require('validator');
const { urlValidationErrorMessage } = require('./validation-messages');

module.exports = (value, helpers) => {
  if (!isURL(value)) {
    return helpers.message(urlValidationErrorMessage);
  }
  return value;
};
