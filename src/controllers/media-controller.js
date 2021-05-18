const { MediaRepo } = require('../repositories');

async function upload(req, res, next) {
  const { _id } = req.user;
  const { media, type, title } = req.body;

  try {
    const response = await MediaRepo.create({
      media: media,
      type: type,
      owner: _id,
      title: title,
    });

    if (response.error) {
      return res.status(400).send({
        data: null,
        error: response.error,
      });
    }

    if (response.data) {
      return res.status(200).send({
        data: 'OK',
        error: null,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function getMedia(_, res, next) {
  try {
    const response = await MediaRepo.find();

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
  upload: upload,
  getMedia: getMedia,
};
