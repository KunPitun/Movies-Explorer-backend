const { nameRuValidationErrorMessage } = require('./validation-messages');

module.exports = (value, helpers) => {
  const regexStr = `[а-яa-z \\.,:;?!\\-'"’(){}/»«№\`#~&*@_+=[\\]]{${value.length}}`;
  const regex = new RegExp(regexStr, 'i');
  const isValid = regex.test(value);
  if (helpers) {
    if (isValid) {
      return value;
    }
    return helpers.message(nameRuValidationErrorMessage);
  }
  return isValid;
};
