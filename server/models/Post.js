const mongoose = require("mongoose");

const { Schema } = mongoose;

const PostSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  content: { type: String, required: true },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
  isPinned: { type: Boolean, required: true, default: false },
  media: [{ type: Schema.Types.ObjectId, ref: "Media" }],
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  saves: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  date: { type: Date, default: new Date() },
});

PostSchema.pre("deleteOne", { document: true }, async function preDelete(next) {
  const deletedPost = this;

  const { comments } = await deletedPost.populate("comments");
  comments.forEach(async (comment) => {
    await comment.deleteOne();
  });
  next();
});

module.exports = mongoose.model("Post", PostSchema);
