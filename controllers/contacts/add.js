const { contacts } = require("../../data");

const add = async (req, res, next) => {
  try {
    const newContact = await contacts.addContact(req.body);

    res.json({
      status: "success",
      code: 201,
      data: {
        result: newContact,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
