const { contacts } = require("../../data");

const update = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { body } = req;

    const updateContact = await contacts.updateContact(contactId, body);

    if (!updateContact) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result: updateContact,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
