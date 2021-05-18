const { authMiddleware } = require('./auth-middleware');
const { errorMiddleware } = require('./error-middleware');
const { findIdMiddleware } = require('./findId-middleware');

module.exports = {
  authMiddleware: authMiddleware,
  errorMiddleware: errorMiddleware,
  findIdMiddleware: findIdMiddleware,
};
