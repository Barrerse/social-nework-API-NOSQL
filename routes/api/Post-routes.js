const router = require("express").Router();

const {
  getAllPost,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  addReaction,
  removeReaction,
} = require("../../controllers/Post-controller");


router.route("/")
  .get(getAllPost)
  .post(createPost);


router.route("/:id")
  .get(getPostById)
  .put(updatePost)
  .delete(deletePost);


router.route("/:PostId/reactions")
  .post(addReaction);


router.route("/:PostId/reactions/:reactionId")
  .delete(removeReaction);

module.exports = router;
