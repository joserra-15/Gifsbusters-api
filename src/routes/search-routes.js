const Router = require('express').Router;

const { searchController } = require('../controllers');

const searchRouter = Router();

searchRouter.get('/meme/:searchValue', searchController.getMemeSearch);
searchRouter.get('/gif/:searchValue', searchController.getGifSearch);
searchRouter.get('/user/:searchValue', searchController.getUserSearch);

module.exports = {
  searchRouter: searchRouter,
};
