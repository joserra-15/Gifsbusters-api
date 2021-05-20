const Joi = require('joi');

const updateUserValidationSchema = Joi.object({
  userName: Joi.string().min(3).max(20).required(),
  image: Joi.string().uri().required(),
});

async function validateUpdateUser(req, res, next) {
  const { userName, image } = req.body;

  try {
    const { error } = updateUserValidationSchema.validate({
      userName,
      image,
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

module.exports = { validateUpdateUser };
