const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentSchema = new Schema({
  parent: { type: Schema.Types.ObjectId, ref: "Post" || "Comment" },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  content: { type: String, required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  edited: { type: Boolean, default: false },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  date: { type: Date, default: new Date() },
});

CommentSchema.pre(
  "deleteOne",
  { document: true },
  async function preDelete(next) {
    const deletedComment = this;
    const { comments } = await deletedComment.populate("comments");
    comments.forEach(async (comment) => {
      await comment.deleteOne();
    });
    next();
  }
);

CommentSchema.pre("find", async function populateAvatar() {
  this.populate({
    path: "comments",
    populate: {
      path: "author",
      select: "username",
      populate: { path: "avatar", select: "src" },
    },
  });
});

module.exports = mongoose.model("Comment", CommentSchema);
