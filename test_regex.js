const urlValidator = (value) => {
  const firstPartOfRegex = /https?:\/\/w?w?w?\.?/i;
  const secondPartOfRegex = `https?:\\/\\/w?w?w?\\.?[a-z0-9_\\-.~:/?#[\\]@!$&'()*+,;=\\\\]{${value.length - value.match(firstPartOfRegex)[0].length}}#?`;
  const regex = new RegExp(secondPartOfRegex, 'i');
  return regex.test(value);
};

const directorAndCountryValidator = (value) => {
  const regexStr = `[а-яa-z '\\-]{${value.length}}`;
  const regex = new RegExp(regexStr, 'i');
  return regex.test(value);
};

const descriptionAndNameRUValidator = (value) => {
  const regexStr = `[а-яa-z \\.,:;?!\\-'"’()/»«№\`&*@_+=]{${value.length}}`;
  const regex = new RegExp(regexStr, 'i');
  return regex.test(value);
};

const yearValidator = (value) => {
  const regexStr = `[0-9годyear \\.]{${value.length}}`;
  const regex = new RegExp(regexStr, 'i');
  const regexNumber = /[0-9]{4}/i;
  const yearInValue = Number(value.match(regexNumber)[0]);
  const yearNow = Number(Date().match(regexNumber)[0]);
  if (regex.test(value) && regexNumber.test(value)
  && (yearInValue >= 1985) && (yearNow >= yearInValue)) {
    return true;
  }
  return false;
};

const nameENValidator = (value) => {
  const regexStr = `[a-z \\.,:;?!\\-'"’()/»«№\`&*@_+=]{${value.length}}`;
  const regex = new RegExp(regexStr, 'i');
  return regex.test(value);
};

console.log(nameRUValidator(''));
