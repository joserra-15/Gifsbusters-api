const Joi = require('joi');

const updateMediaSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  type: Joi.string().valid('gif', 'meme').required(),
});

async function validateUpdateMedia(req, res, next) {
  const { title, type } = req.body;

  try {
    const { error } = updateMediaSchema.validate({
      title,
      type,
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

module.exports = { validateUpdateMedia };
