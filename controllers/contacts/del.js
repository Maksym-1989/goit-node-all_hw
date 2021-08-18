const { contacts: service } = require("../../services");

const del = async (req, res, next) => {
  try {
    const { contactId } = await req.params;
    const contact = await service.removeContact(contactId);

    if (contact) {
      return res.status(200).json({
        status: "success",
        code: 200,
        data: { result: contact },
        message: "Contact deleted",
      });
    }

    return res.json({ status: "error", code: 404, message: "Not found" });
  } catch (error) {
    next(error);
  }
};

module.exports = del;
