const Joi = require('joi');

const createMediaSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  type: Joi.string().valid('gif', 'meme').required(),
  media: Joi.string().uri().required(),
});

async function validateCreateMedia(req, res, next) {
  const { title, type, media } = req.body;

  try {
    const { error } = createMediaSchema.validate({
      title,
      type,
      media,
    });

    if (error) {
      res.status(401).send({ error: error, data: null });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { validateCreateMedia };
