const { authMiddleware } = require('./auth-middleware');
const { errorMiddleware } = require('./error-middleware');
const { findIdMiddleware } = require('./findId-middleware');
const {
  validateCreateUser,
} = require('./validations/user/createUser-middleware');
const {
  validateUpdateUser,
} = require('./validations/user/updateUser-middleware');

const {
  validateCreateMedia,
} = require('./validations/media/createMedia-middleware');
const {
  validateUpdateMedia,
} = require('./validations/media/updateMedia-middleware');

module.exports = {
  authMiddleware: authMiddleware,
  errorMiddleware: errorMiddleware,
  findIdMiddleware: findIdMiddleware,
  validateCreateUser: validateCreateUser,
  validateUpdateUser: validateUpdateUser,
  validateCreateMedia: validateCreateMedia,
  validateUpdateMedia: validateUpdateMedia,
};
