const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const UnauthorizedError = require('../errors/unauthorized-error');
const nameValidator = require('../validators/name-validator');
const passwordValidator = require('../validators/password-validator');
const {
  passwordValidationErrorMessage,
  nameValidationErrorMessage,
} = require('../validators/validation-messages');

const unauthorizedErrorMessage = 'Неправильные почта или пароль';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Не указано имя'],
    minlength: [2, 'Имя пользователя должно быть не меньше 2-х символов'],
    maxlength: [30, 'Имя пользователя должно быть не более 30-и символов'],
    validate: [nameValidator, nameValidationErrorMessage],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Не указан email'],
    validate: [validator.isEmail, 'Некорректный email'],
  },
  password: {
    type: String,
    select: false,
    required: [true, 'Не указан пароль'],
    minlength: [8, 'Пароль должен быть не менее 8-и символов'],
    validate: [passwordValidator, passwordValidationErrorMessage],
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedError(unauthorizedErrorMessage));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnauthorizedError(unauthorizedErrorMessage));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
