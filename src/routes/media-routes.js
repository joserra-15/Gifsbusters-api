const Router = require('express').Router;

const { authMiddleware, findIdMiddleware } = require('../middlewares');
const { mediaController } = require('../controllers');

const mediaRouter = Router();

mediaRouter.get('/memes', mediaController.getMemes);
mediaRouter.get('/gifs', mediaController.getGifs);
mediaRouter.get('/user/:userId', mediaController.getMediaByUserId);
mediaRouter.get('/:mediaId', mediaController.getMediaById);
mediaRouter.get('/', mediaController.getMedia);

mediaRouter.patch(
  '/',
  authMiddleware,
  findIdMiddleware,
  mediaController.editMedia,
);
mediaRouter.delete(
  '/',
  authMiddleware,
  findIdMiddleware,
  mediaController.deleteMedia,
);

mediaRouter.post(
  '/upload',
  authMiddleware,
  findIdMiddleware,
  mediaController.upload,
); // add middlewares validation

module.exports = {
  mediaRouter: mediaRouter,
};
