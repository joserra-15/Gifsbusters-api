const Router = require('express').Router;

const { searchController } = require('../controllers');

const searchRouter = Router();

searchRouter.get('/meme/:searchValues', searchController.getMemeSearch);
/* searchRouter.get('/gifs', searchController.getGifs);
searchRouter.get('/:mediaId', searchController.getMediaById);
searchRouter.get('/', searchController.getMedia); */

module.exports = {
  searchRouter: searchRouter,
};
