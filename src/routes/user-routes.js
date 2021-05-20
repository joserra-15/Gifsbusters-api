const Router = require('express').Router;

const {
  authMiddleware,
  findIdMiddleware,
  validateUpdateUser,
  validateCreateUser,
} = require('../middlewares');
const { userController } = require('../controllers');

const userRouter = Router();

userRouter.post(
  '/sign-up',
  authMiddleware,
  validateCreateUser,
  userController.signUp,
);
userRouter.post('/sign-out', authMiddleware, userController.signOut);

userRouter.get('/:userId', userController.getUserById);
userRouter.patch(
  '/',
  authMiddleware,
  findIdMiddleware,
  validateUpdateUser,
  userController.editUser,
);

module.exports = {
  userRouter: userRouter,
};
