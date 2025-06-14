const { Router } = require("express");
const postsController = require("../Controllers/postController");
const requestDetailsLogger = require("../middleware/requestDetailsLogger");

const router = Router();

router.post("/", requestDetailsLogger, postsController.createPost);
router.get("/", postsController.getAllPosts);
router.get("/:id", postsController.getPostById);
router.patch("/:id", postsController.updatePostById);
router.delete("/:id", postsController.deletePostById);

module.exports = router;
