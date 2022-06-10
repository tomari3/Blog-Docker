const express = require("express");

const router = express.Router();

const postController = require("../../controllers/postController");

const upload = require("../../config/multer");

/* GET home page. */
router
  .route("/")
  .get(postController.getAllPosts)
  .post(upload.array("images", 10), postController.newPost);

router
  .route("/:id")
  .get(postController.getPost)
  .put(postController.updatePost)
  .delete(postController.deletePost);

router.post("/:id/like", postController.likePost);
router.post("/:id/save", postController.savePost);

router
  .route("/:id/comments")
  .get(postController.getAllComments)
  .post(postController.newComment);

router
  .route("/:postId/comments/:commentId")
  .get(postController.getComment)
  .put(postController.updateComment)
  .delete(postController.deleteComment);

router
  .route("/comments/:id/comments")
  .get(postController.getAllSubComments)
  .post(postController.newSubComment);

router.post("/comments/:id/like", postController.likeComment);

module.exports = router;
