const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const utils = require("../lib/utils");

exports.signup = [
  body("username")
    .trim()
    .isLength({ min: 3, max: 15 })
    .escape()
    .withMessage("username must between 3 and 15 characters"),
  body("email").isEmail().withMessage("must provide an email"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters"),

  async (req, res) => {
    const { username, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const duplicate = await User.findOne({ username }).exec();
    if (duplicate) return res.status(409).json("duplicate username"); // Conflict

    try {
      const saltHash = utils.genPassword(password);
      const { salt } = saltHash;
      const { hash } = saltHash;

      const user = await User.create({
        email: req.body.email,
        username: req.body.username,
        hash,
        salt,
        roles: { User: 2001 },
      });
      return res.status(201).json({ success: `New user ${user} created!` });
    } catch (err) {
      return res.status(409).json("duplicate email");
    }
  },
];

exports.login = async (req, res) => {
  const { cookies } = req;
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  const foundUser = await User.findOne({ username });
  if (!foundUser) return res.status(401).json("wrong username");

  const valid = utils.validPassword(password, foundUser.hash, foundUser.salt);

  if (!valid) return res.status(401).json("wrong password");

  const { accessToken } = utils.issueJWTAccess(foundUser);
  const { refreshToken } = utils.issueJWTRefresh(foundUser);

  let newRefreshTokenArray = !cookies?.jwt
    ? foundUser.refreshToken
    : foundUser.refreshToken.filter((rt) => rt !== cookies.jwt);

  if (cookies?.jwt) {
    const oldRefreshToken = cookies.jwt;
    const foundToken = await User.findOne({
      refreshToken: oldRefreshToken,
    }).exec();

    if (!foundToken) {
      newRefreshTokenArray = [];
    }

    res.clearCookie("jwt", {
      httpOnly: true,
      secure: true,
    });
  }

  foundUser.refreshToken = [...newRefreshTokenArray, refreshToken];
  const { _id, roles, avatar } = await foundUser.populate("avatar", "src");

  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.json({
    _id,
    username,
    roles,
    accessToken,
    avatar,
  });
};

exports.logout = async (req, res) => {
  // no cookies, logged out.
  const { cookies } = req;
  if (!cookies?.jwt) return res.sendStatus(204); // No content
  const refreshToken = cookies.jwt;
  // check refresh token in users
  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) {
    res.clearCookie("jwt", {
      path: "/",
      secure: true,
      httpOnly: true,
    });
    return res.sendStatus(204);
  }
  // delete refresh tokens
  foundUser.refreshToken = "";
  await foundUser.save();

  res.clearCookie("jwt", {
    path: "/",
    secure: true,
    httpOnly: true,
  });
  return res.sendStatus(204);
};

exports.refresh = async (req, res) => {
  const cookies = req.cookies.jwt;
  res.clearCookie("jwt", {
    path: "/",
    secure: true,
    httpOnly: true,
  });
  const foundUser = await User.findOne({ cookies }).exec();

  if (!foundUser) {
    req.user.refreshToken = [];
    await req.user.save();
    return res.sendStatus(403); // Forbidden
  }

  const newRefreshTokenArray = foundUser.refreshToken.filter(
    (rt) => rt !== cookies
  );

  const { accessToken } = utils.issueJWTAccess(foundUser);
  const { refreshToken } = utils.issueJWTRefresh(foundUser);

  foundUser.refreshToken = [...newRefreshTokenArray, refreshToken];
  const { _id, username, roles, avatar } = await foundUser.populate(
    "avatar",
    "src"
  );

  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.json({
    _id,
    username,
    roles,
    accessToken,
    avatar,
  });
};
