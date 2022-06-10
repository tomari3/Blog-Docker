/* eslint-disable camelcase */
const User = require("../models/User");
const Post = require("../models/Post");
const Media = require("../models/Media");

const { cloudinary } = require("../config/cloudinary");

exports.getAllUsers = async (req, res) => {
  const users = await User.find({}).populate("avatar");
  if (!users) return res.status(404).json({ message: "user not found." });
  return res.json(users);
};

exports.getUser = async (req, res) => {
  const user = await User.findOne({ username: req.params.id })
    .populate("cover")
    .populate("avatar");
  if (!user) return res.status(404).json({ message: "user not found." });
  return res.json(user);
};

exports.updateUserCoverPicture = async (req, res) => {
  const { id } = req.user;
  let user = await User.findById(id);
  if (!user) return res.status(404).json({ message: "user not found." });
  if (req.file) {
    const { file } = req;
    const { url, public_id, resource_type } = await cloudinary.uploader.upload(
      file.path,
      {
        resource_type: "auto",
      }
    );
    const cover = await Media.create({
      type: resource_type,
      role: "cover",
      author: id,
      src: url,
      public_id,
    });
    user.cover = cover;
    user.markModified("cover");
    user = await user.save();
  }
  return res.json(user);
};

exports.updateUserAvatarPicture = async (req, res) => {
  const { id } = req.user;
  let user = await User.findById(id);
  if (!user) return res.status(404).json({ message: "user not found." });
  if (req.file) {
    const { file } = req;
    const { url, public_id, resource_type } = await cloudinary.uploader.upload(
      file.path,
      {
        resource_type: "auto",
      }
    );
    const avatar = await Media.create({
      type: resource_type,
      role: "avatar",
      author: id,
      src: url,
      public_id,
    });
    user.avatar = avatar;
    user.markModified("cover");
    user = await user.save();
  }
  return res.json(user);
};

exports.getPostsByUsername = async (req, res) => {
  const user = await User.findOne({ username: req.params.id });
  const posts = await Post.find({ author: user })
    .populate("tags")
    .populate({
      path: "author",
      select: "username",
      populate: { path: "avatar", select: "src" },
    })

    .populate("media");
  return res.json(posts);
};

exports.getLikesByUsername = async (req, res) => {
  const user = await User.findOne({ username: req.params.id });
  const posts = await Post.find({ likes: user._id })
    .populate("tags")
    .populate({
      path: "author",
      select: "username",
      populate: { path: "avatar", select: "src" },
    })

    .populate("media");
  return res.json(posts);
};

exports.getSavesByUsername = async (req, res) => {
  const user = await User.findOne({ username: req.params.id });
  const posts = await Post.find({ saves: user._id })
    .populate("tags")
    .populate({
      path: "author",
      select: "username",
      populate: { path: "avatar", select: "src" },
    })

    .populate("media");
  return res.json(posts);
};
