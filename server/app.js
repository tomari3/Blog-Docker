const cors = require("cors");
const passport = require("passport");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");

require("dotenv").config();

const app = express();

require("./config/database");

require("./models");

require("./config/passport")(passport);

app.use(passport.initialize());

app.use(logger("dev"));

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", require("./routes/auth"));

app.use(
  "/api/posts",
  passport.authenticate("access", { session: false }),
  require("./routes/api/posts")
);
app.use(
  "/api/users",
  passport.authenticate("access", { session: false }),
  require("./routes/api/users")
);
app.use(
  "/api/tags",
  passport.authenticate("access", { session: false }),
  require("./routes/api/tags")
);

// Serve any static files
app.use(express.static(path.join(__dirname, "../client/build")));

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    error: err,
  });
});

module.exports = app;
