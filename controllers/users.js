const { NODE_ENV, JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const { developmentJwtKey } = require('../utils/config');
const NotFoundError = require('../errors/not-found-error');
const BadRequestError = require('../errors/bad-request-error');
const ConflictError = require('../errors/conflict-error');
const {
  userBadRequestErrorMessage,
  userNotFoundErrorMessage,
  userConflictErrorMessage,
} = require('../utils/messages');

module.exports.getUserMe = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(() => {
      throw new NotFoundError(userNotFoundErrorMessage);
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'NotFoundError') {
        next(err);
        return;
      }
      next(err);
    });
};

module.exports.updateUser = (req, res, next) => {
  const { name, email } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, email }, {
    new: true, runValidators: true,
  })
    .orFail(() => {
      throw new NotFoundError(userNotFoundErrorMessage);
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError(userConflictErrorMessage));
        return;
      }
      if (err.name === 'ValidationError') {
        next(new BadRequestError(err.message));
        return;
      }
      if (err.name === 'NotFoundError') {
        next(err);
        return;
      }
      if (err.name === 'CastError') {
        next(new BadRequestError(userBadRequestErrorMessage));
        return;
      }
      next(err);
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : developmentJwtKey,
        {
          expiresIn: '7d',
        },
      );
      res.send({ token });
    })
    .catch((err) => {
      if (err.name === 'UnauthorizedError') {
        next(err);
        return;
      }
      next(err);
    });
};

module.exports.register = (req, res, next) => {
  const { email, password, name } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({ email, password: hash, name }))
    .then((user) => {
      res.send({
        data: {
          name: user.name,
          email: user.email,
          _id: user._id,
        },
      });
    })
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError(userConflictErrorMessage));
        return;
      }
      if (err.name === 'ValidationError') {
        next(new BadRequestError(err.message));
        return;
      }
      next(err);
    });
};
