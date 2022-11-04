const { NODE_ENV, JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-error');
const { authUnuthorizedErrorMessage } = require('../utils/messages');
const { developmentJwtKey } = require('../utils/config');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnauthorizedError(authUnuthorizedErrorMessage));
    return;
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : developmentJwtKey);
  } catch (err) {
    next(new UnauthorizedError(authUnuthorizedErrorMessage));
  }
  req.user = payload;
  next();
};
