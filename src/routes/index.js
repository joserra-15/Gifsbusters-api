const { userRouter } = require('./user-routes');
const { mediaRouter } = require('./media-routes');
const { searchRouter } = require('./search-routes');

module.exports = {
  userRouter: userRouter,
  mediaRouter: mediaRouter,
  searchRouter: searchRouter,
};
