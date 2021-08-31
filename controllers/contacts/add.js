const { contacts: service } = require("../../services");

const add = async (req, res, next) => {
  try {
    const newContact = { ...req.body, owner: req.user._id };
    const result = await service.addContact(newContact);
    if (!result) {
      return res.status(409).json({
        status: "error",
        code: 409,
        message: "This mail already exists",
      });
    }
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
