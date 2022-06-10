const mongoose = require("mongoose");
// const { DateTime } = require("luxon");

const { Schema } = mongoose;

const TagSchema = new Schema({
  name: { type: String, required: true, unique: true },
  created: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Tag", TagSchema);
