const { contacts } = require("../../data");

const getAll = async (req, res, next) => {
  try {
    const allContacts = await contacts.listContacts();
    res.json({ status: "success", code: 200, data: { result: allContacts } });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
