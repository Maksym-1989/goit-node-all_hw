const { contacts: service } = require("../../services");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const ownerId = req.user._id;
    const contact = await service.getContactById(contactId, ownerId);
    if (!contact) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
    }

    res.json({ status: "success", code: 200, data: { result: contact } });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
