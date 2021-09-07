const signup = require("./signup");
const signin = require("./signin");
const logout = require("./logout");
const getCurrentUser = require("./getCurrentUser");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const sendAgainEmailVerify = require("./sendAgainEmailVerify");

module.exports = {
  signup,
  signin,
  logout,
  getCurrentUser,
  updateAvatar,
  verifyEmail,
  sendAgainEmailVerify
};
