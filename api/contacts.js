const express = require("express");
const router = express.Router();
const { contacts: ctrl } = require("../controllers");
const { validateContact } = require("../middleware");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateContact, ctrl.add);

router.delete("/:contactId", ctrl.del);

router.put("/:contactId", validateContact, ctrl.update);

router.patch("/:contactId/favorite", validateContact, ctrl.update);

module.exports = router;
