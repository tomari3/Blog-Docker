const mongoose = require("mongoose");

const { Schema } = mongoose;

const MediaScheme = new Schema({
  type: { type: String, enum: ["image", "video"] },
  role: { type: String, enum: ["avatar", "cover", "post"] },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  src: { type: String },
  public_id: { type: String },
  date: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Media", MediaScheme);
