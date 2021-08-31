const express = require("express");
const router = express.Router();
const { contacts: ctrl } = require("../controllers");
const { validateContact, authentificate } = require("../middleware");

router.get("/", authentificate, ctrl.getAll);

router.get("/:contactId", authentificate, ctrl.getById);

router.post("/", authentificate, validateContact, ctrl.add);

router.delete("/:contactId", authentificate, ctrl.del);

router.put("/:contactId", authentificate, validateContact, ctrl.update);

router.patch(
  "/:contactId/favorite",
  authentificate,
  validateContact,
  ctrl.update
);

module.exports = router;
