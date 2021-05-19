const Router = require('express').Router;

const { authMiddleware, findIdMiddleware } = require('../middlewares');
const { userController } = require('../controllers');

const userRouter = Router();

userRouter.post('/sign-up', authMiddleware, userController.signUp);
userRouter.post('/sign-out', authMiddleware, userController.signOut);

userRouter.get('/:userId', userController.getUserById);
userRouter.patch(
  '/',
  authMiddleware,
  findIdMiddleware,
  userController.editUser,
);

module.exports = {
  userRouter: userRouter,
};
