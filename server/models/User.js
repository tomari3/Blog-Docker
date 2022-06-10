const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  hash: { type: String, required: true },
  salt: { type: String, required: true },
  roles: { type: Object },
  refreshToken: [{ type: String }],

  avatar: { type: Schema.Types.ObjectId, ref: "Media" },
  cover: { type: Schema.Types.ObjectId, ref: "Media" },
  bio: { type: String },
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],

  date: { type: Date, default: new Date() },
});

module.exports = mongoose.model("User", UserSchema);
