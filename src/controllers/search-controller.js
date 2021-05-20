const { MediaRepo, UserRepo } = require('../repositories');

async function getMemeSearch(req, res, next) {
  const { searchValue } = req.params;
  try {
    const response = await MediaRepo.searchMemes(searchValue);

    if (response.error) {
      return res.status(400).send({
        data: null,
        error: response.error,
      });
    }

    if (response.data) {
      return res.status(200).send({
        data: response.data,
        error: null,
      });
    }
  } catch (error) {
    next(error);
  }
}

async function getGifSearch(req, res, next) {
  const { searchValue } = req.params;
  try {
    const response = await MediaRepo.searchGifs(searchValue);

    if (response.error) {
      return res.status(400).send({
        data: null,
        error: response.error,
      });
    }

    if (response.data) {
      return res.status(200).send({
        data: response.data,
        error: null,
      });
    }
  } catch (error) {
    next(error);
  }
}

async function getUserSearch(req, res, next) {
  const { searchValue } = req.params;
  try {
    const response = await UserRepo.searchUsers(searchValue);

    if (response.error) {
      return res.status(400).send({
        data: null,
        error: response.error,
      });
    }

    if (response.data) {
      return res.status(200).send({
        data: response.data,
        error: null,
      });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getMemeSearch: getMemeSearch,
  getGifSearch: getGifSearch,
  getUserSearch: getUserSearch,
};
