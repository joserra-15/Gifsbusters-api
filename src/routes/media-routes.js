const Router = require('express').Router;

const { authMiddleware, findIdMiddleware } = require('../middlewares');
const { mediaController } = require('../controllers');

const mediaRouter = Router();

mediaRouter.get('/', mediaController.getMedia); // add middlewares validation
mediaRouter.post(
  '/upload',
  authMiddleware,
  findIdMiddleware,
  mediaController.upload,
); // add middlewares validation

module.exports = {
  mediaRouter: mediaRouter,
};
