const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const UnauthorizedError = require('../errors/unauthorized-error');
const {
  userSchemaUnauthorizedErrorMessage,
  userSchemaNameRequredErrorMessage,
  userSchemaNameMinlengthErrorMessage,
  userSchemaNameMaxlengthErrorMessage,
  userSchemaEmailRequiredErrorMessage,
  userSchemaEmailValidateErrorMessage,
  userSchemaPasswordRequiredErrorMessage,
} = require('../utils/messages');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, userSchemaNameRequredErrorMessage],
    minlength: [2, userSchemaNameMinlengthErrorMessage],
    maxlength: [30, userSchemaNameMaxlengthErrorMessage],
  },
  email: {
    type: String,
    unique: true,
    required: [true, userSchemaEmailRequiredErrorMessage],
    validate: [validator.isEmail, userSchemaEmailValidateErrorMessage],
  },
  password: {
    type: String,
    select: false,
    required: [true, userSchemaPasswordRequiredErrorMessage],
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedError(userSchemaUnauthorizedErrorMessage));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnauthorizedError(userSchemaUnauthorizedErrorMessage));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
