const express = require("express");

const router = express.Router();

const tagController = require("../../controllers/tagController");

router.route("/").get(tagController.getAllTags);
router.route("/:id").get(tagController.getPostsByTag);

module.exports = router;
