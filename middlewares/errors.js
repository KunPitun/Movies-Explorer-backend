const { internalServerErrorMessage } = require('../utils/messages');

module.exports = (err, req, res, next) => {
  res.status(err.statusCode || 500)
    .send({ message: err.statusCode ? err.message : internalServerErrorMessage });
  return next();
};
