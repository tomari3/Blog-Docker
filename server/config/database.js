const mongoose = require("mongoose");

require("dotenv").config();

const mongoDB = process.env.DB_STRING;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on("error", console.error.bind(console, "MongoDB connection error"));
