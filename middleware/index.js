const validateContact = require("./validateContact");
const validateUser = require("./validateUser");
const authentificate = require("./authentificate");
const uploadMiddleware = require("./uploadMiddleware");
const validateEmail = require("./validateEmail");

module.exports = {
  validateContact,
  validateUser,
  authentificate,
  uploadMiddleware,
  validateEmail
};
