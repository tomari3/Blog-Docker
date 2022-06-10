/* eslint-disable camelcase */
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const Tag = require("../models/Tag");
const Media = require("../models/Media");

const { cloudinary } = require("../config/cloudinary");

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({})
    .sort({ date: -1 })
    .populate({
      path: "author",
      select: "username",
      populate: { path: "avatar", select: "src" },
    })
    .populate("tags")
    .populate("media");
  if (!posts) return res.status(204).json({ message: "No posts found." });
  return res.json(posts);
};

exports.getAllComments = (req, res, next) => {
  Post.findById(req.params.id)
    .populate({
      path: "comments",
      populate: {
        path: "author",
        select: "username",
        populate: { path: "avatar", select: "src" },
      },
    })
    .exec((err, post) => {
      if (err) {
        next(err);
      }
      res.json(post.comments);
    });
};

exports.getAllSubComments = (req, res, next) => {
  Comment.findById(req.params.id)
    .populate({
      path: "comments",
      populate: { path: "author", select: "username" },
    })
    .exec((err, comment) => {
      if (err) {
        next(err);
      }
      return res.json(comment.comments);
    });
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id)
    .populate({
      path: "comments",
      populate: [
        {
          path: "comments",
          select: ["content", "date"],
          populate: { path: "author", select: "username" },
        },
        { path: "author", select: "username" },
      ],
    })
    .populate("author", "username")
    .populate("tags");

  if (!post) return res.status(404).json({ message: "post not found." });
  return res.json(post);
};

exports.getComment = async (req, res) => {
  const { commentId } = req.params;
  const comment = await Comment.findById(commentId).populate({
    path: "comments",
    populate: { path: "author", select: "username" },
  });

  res.json(comment);
};

exports.newPost = async (req, res) => {
  const { _id } = req.user;

  if (!_id) return res.status(401).json({ msg: "not logged in" });

  const mediaURIs = [];
  if (req.files) {
    const { files } = req;

    await Promise.all(
      files.map(async (file) => {
        const { url, public_id, resource_type } =
          await cloudinary.uploader.upload(file.path, {
            resource_type: "auto",
          });
        const media = await Media.create({
          type: resource_type,
          role: "post",
          author: _id,
          src: url,
          public_id,
        });
        mediaURIs.push(media);
      })
    );
  }

  const tags = await Promise.all(
    req.body.tags.split(",").map(async (tag) => {
      tag.trim();
      const allTags = await Tag.findOneAndUpdate(
        { name: tag },
        {},
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
      return allTags;
    })
  );

  try {
    let post = await Post.create({
      author: _id,
      content: req.body.content,
      status: req.body.status,
      isPinned: req.body.pinned,
      tags,
      media: mediaURIs,
    });

    post = await post.populate({
      path: "author",
      select: "username",
      populate: { path: "avatar", select: "src" },
    });

    return res.status(201).json(post);
  } catch (err) {
    return res.json({ err });
  }
};

exports.newComment = async (req, res) => {
  const { _id } = req.user;
  if (!_id) return res.status(401).json({ msg: "not logged in" });
  const newComment = await Comment.create({
    author: _id,
    parent: req.params.id,
    content: req.body.content,
  });

  const post = await Post.findByIdAndUpdate(
    req.params.id,
    {
      $push: { comments: { $each: [newComment], $position: 0 } },
    },
    { new: true }
  ).populate({
    path: "comments",
    populate: [
      {
        path: "comments",
        select: ["content", "date"],
        populate: { path: "author", select: "username" },
      },
      {
        path: "author",
        select: "username",
        populate: { path: "avatar", select: "src" },
      },
    ],
  });
  return res.json(post.comments);
};

exports.newSubComment = async (req, res) => {
  const { _id } = req.user;
  const newComment = await Comment.create({
    author: _id,
    parent: req.params.id,
    content: req.body.content,
  });

  const comment = await Comment.findByIdAndUpdate(
    req.params.id,
    {
      $push: { comments: { $each: [newComment], $position: 0 } },
    },
    { new: true }
  ).populate({
    path: "comments",
    populate: {
      path: "author",
      select: "username",
      populate: { path: "avatar", select: "src" },
    },
    options: { sort: { date: -1 } },
  });
  return res.json(comment.comments);
};

exports.likePost = async (req, res) => {
  const { _id } = req.user;
  if (!_id) {
    return res.status(401).json({ msg: "not logged in" });
  }
  let newPost;
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ msg: "post not found" });
  const isLiked = post.likes.includes(_id);
  if (isLiked) {
    newPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likes: _id },
      },
      { new: true }
    );
  } else {
    newPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $push: { likes: _id },
      },
      { new: true }
    );
  }
  return res.json(newPost.likes);
};

exports.savePost = async (req, res) => {
  const { _id } = req.user;

  if (!_id) {
    return res.status(401).json({ msg: "not logged in" });
  }
  let newPost;
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(401).json({ msg: "post not found" });
  const isSaved = post.saves.includes(_id);
  if (isSaved) {
    newPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { saves: _id },
      },
      { new: true }
    );
  } else {
    newPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $push: { saves: _id },
      },
      { new: true }
    );
  }
  return res.json(newPost.saves);
};

exports.likeComment = async (req, res) => {
  const { _id } = req.user;
  if (!_id) {
    return res.status(401).json({ msg: "not logged in" });
  }
  let newComment;
  const comment = await Comment.findById(req.params.id);
  if (!comment) return res.status(401).json({ msg: "comment not found" });
  const isSaved = comment.likes.includes(_id);
  if (isSaved) {
    newComment = await Comment.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likes: _id },
      },
      { new: true }
    );
  } else {
    newComment = await Comment.findByIdAndUpdate(
      req.params.id,
      {
        $push: { likes: _id },
      },
      { new: true }
    );
  }
  return res.json(newComment.likes);
};

exports.updatePost = async (req, res) => {
  const { _id } = req.user;
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ msg: "no post was found" });
  if (!post.author.equals(_id)) {
    return res.status(401).json({ msg: "not this post's author" });
  }
  if (req.body?.content) post.content = req.body.content;
  await post.save();
  return res.status(201).json({ msg: "success" });
};

exports.updateComment = async (req, res) => {
  const { _id } = req.user;
  const { commentId } = req.params;
  const comment = await Comment.findById(commentId);
  if (!comment) return res.status(404).json({ msg: "no comment was found" });
  if (!comment.author.equals(_id)) {
    return res.status(401).json({ msg: "not this comment's author" });
  }
  if (!req.body?.content)
    return res.status(400).json({ msg: "no content was provided" });

  comment.content = req.body.content;
  comment.edited = true;

  await comment.save();
  return res.status(201).json({ msg: "success" });
};

exports.deletePost = async (req, res) => {
  const { _id } = req.user;
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ msg: "post is deleted" });
  if (!post.author.equals(_id)) {
    res.status(401).json({ msg: "not the author" });
  }
  const deletedPost = await post.deleteOne();

  return res.status(201).json(deletedPost);
};

exports.deleteComment = async (req, res) => {
  // also deletes all nested comments in pre
  const { postId, commentId } = req.params;
  const { _id } = req.user;
  if (!_id) {
    return res.status(401).json({ msg: "not logged in" });
  }
  const comment = await Comment.findById(commentId);
  if (!comment) return res.status(204).json({ msg: "no comment found" });
  if (!comment.author.equals(_id)) {
    return res.status(401).json({ msg: "not this comment's author" });
  }
  await comment.deleteOne();
  if (comment.parent.equals(postId)) {
    await Post.findByIdAndUpdate(comment.parent, {
      $pull: { comments: comment._id },
    });
  }
  return res.sendStatus(201);
};
