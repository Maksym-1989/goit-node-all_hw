const express = require("express");

const { auth: ctrl } = require("../controllers");
const {
  validateUser,
  authentificate,
  uploadMiddleware,
} = require("../middleware");

const router = express.Router();

router.post("/signup", validateUser, ctrl.signup);

router.post("/signin", validateUser, ctrl.signin);

router.get("/logout", authentificate, ctrl.logout);

router.get("/current", authentificate, ctrl.getCurrentUser);

/////
router.patch(
  "/avatars",
  authentificate,
  uploadMiddleware.single("avatar"),
  ctrl.updateAvatar
);
////////
module.exports = router;
