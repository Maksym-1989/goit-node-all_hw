const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string()
    .pattern(/[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}/)
    .required(),
  favorite: Joi.boolean(),
});

const validateContact = (req, res, next) => {
  const { error } = contactSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: error.message,
    });
  }
  next();
};

module.exports = validateContact;
