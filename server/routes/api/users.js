const express = require("express");

const router = express.Router();

const userController = require("../../controllers/userController");

const upload = require("../../config/multer");

router.route("/").get(userController.getAllUsers);

router.route("/:id").get(userController.getUser);

router
  .route("/:id/cover")
  .put(upload.single("cover"), userController.updateUserCoverPicture);

router
  .route("/:id/avatar")
  .put(upload.single("avatar"), userController.updateUserAvatarPicture);

router.route("/:id/posts").get(userController.getPostsByUsername);

router.route("/:id/likes").get(userController.getLikesByUsername);

router.route("/:id/saves").get(userController.getSavesByUsername);

module.exports = router;
