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
  return res.status(203).json("avatar updated");
};

exports.deleteUserAvatarPicture = async (req, res) => {
  const { _id } = req.user;
  const { public_id } = req.body;
  const avatar = await Media.findOne({ public_id });
  if (!avatar) return res.status(404).json("no photo to delete");
  if (!_id.equals(avatar?.author))
    return res.status(401).json("cannot edit others photos");

  await User.findByIdAndUpdate(_id, { $unset: { avatar: 1 } });

  await cloudinary.uploader.destroy(avatar.public_id);
  await avatar.deleteOne();

  return res.status(203).json("avatar deleted");
};

exports.deleteUserCoverPicture = async (req, res) => {
  const { _id } = req.user;
  const { public_id } = req.body;
  const cover = await Media.findOne({ public_id });
  if (!cover) return res.status(404).json("no photo to delete");
  if (!_id.equals(cover?.author))
    return res.status(401).json("cannot edit others photos");

  await User.findByIdAndUpdate(_id, { $unset: { cover: 1 } });

  await cloudinary.uploader.destroy(cover.public_id);
  await cover.deleteOne();

  return res.status(203).json("cover deleted");
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
