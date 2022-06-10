const Post = require("../models/Post");
const Tag = require("../models/Tag");

exports.getAllTags = async (req, res) => {
  const tags = await Tag.find({});
  if (!tags) return res.status(404).json({ message: "user not found." });
  return res.json(tags);
};

exports.getPostsByTag = async (req, res) => {
  const tag = req.params.id.trim();
  const posts = await Post.find({ tags: tag })
    .sort({ date: -1 })
    .populate({
      path: "author",
      select: "username",
      populate: { path: "avatar", select: "src" },
    })
    .populate("tags");
  if (!posts) return res.status(404).json({ message: "user not found." });
  return res.json(posts);
};
