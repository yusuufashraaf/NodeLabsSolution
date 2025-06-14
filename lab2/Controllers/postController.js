const { isValidObjectId } = require("mongoose");
const Post = require("../Models/postModel");

// 1- Create a post
const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        status: "Failure",
        message: "Title is required",
      });
    }

    const post = await Post.create({ title, description });

    res.status(201).json({
      status: "Success",
      message: "Post created successfully",
      data: post,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failure",
      message: "Internal server error",
    });
  }
};

// 2- Get  all posts
const getAllPosts = async (req, res) => {
  const posts = await Post.find({}, { title: 1, description: 1 });

  res.status(200).json({
    status: "Success",
    message: "Posts fetched successfully",
    data: posts,
  });
};

//3- Get post by ID
const getPostById = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({
      status: "Failure",
      message: "Invalid post id",
    });
  }

  const post = await Post.findById(id);

  if (!post) {
    return res.status(404).json({
      status: "Failure",
      message: "Post not found",
    });
  }

  res.status(200).json({
    status: "Success",
    message: "Post fetched successfully",
    data: post,
  });
};

//4- Update post by ID
const updatePostById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!body.title) {
    return res.status(400).json({
      status: "Failure",
      message: "Title is required",
    });
  }

  if (!isValidObjectId(id)) {
    return res.status(400).json({
      status: "Failure",
      message: "Invalid post id",
    });
  }

  const post = await Post.findByIdAndUpdate(
    id,
    { title: body.title, description: body.description },
    { new: true, runValidators: true }
  );

  if (!post) {
    return res.status(404).json({
      status: "Failure",
      message: "Post not found",
    });
  }

  res.status(200).json({
    status: "Success",
    message: "Post updated successfully",
    data: post,
  });
};

// 5- Delete post by ID
const deletePostById = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({
      status: "Failure",
      message: "Invalid post id",
    });
  }

  const post = await Post.findOneAndDelete({ _id: id });

  if (!post) {
    return res.status(404).json({
      status: "Failure",
      message: "Post not found",
    });
  }

  res.status(204).send();
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
};
