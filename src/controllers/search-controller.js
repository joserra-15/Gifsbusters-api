const { MediaRepo } = require('../repositories');

async function getMemeSearch(req, res, next) {
  const { searchValues } = req.params;
  try {
    const response = await MediaRepo.searchMemes(searchValues);

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
    console.log(error);
    next(error);
  }
}

module.exports = {
  getMemeSearch: getMemeSearch,
};
