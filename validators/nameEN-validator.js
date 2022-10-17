const { nameEnValidationErrorMessage } = require('./validation-messages');

module.exports = (value, helpers) => {
  const regexStr = `[a-z \\.,:;?!\\-'"’(){}/»«№\`&*@_+=]{${value.length}}`;
  const regex = new RegExp(regexStr, 'i');
  const isValid = regex.test(value);
  if (helpers) {
    if (isValid) {
      return value;
    }
    return helpers.message(nameEnValidationErrorMessage);
  }
  return isValid;
};
