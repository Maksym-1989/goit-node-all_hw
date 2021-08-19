const { contacts: service } = require("../../services");
const add = async (req, res, next) => {
  try {
    const result = await service.addContact(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
