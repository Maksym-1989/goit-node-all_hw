const { contacts: service } = require("../../services");

const getAll = async (req, res, next) => {
  try {
    const allContacts = await service.listContacts();
    res.json({ status: "success", code: 200, data: { result: allContacts } });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
