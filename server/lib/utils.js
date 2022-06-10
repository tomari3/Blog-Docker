require("dotenv").config();
const crypto = require("crypto");
const jsonwebtoken = require("jsonwebtoken");

const { PRIV_KEY } = process.env;

const validPassword = (password, hash, salt) => {
  const hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hash === hashVerify;
};

const genPassword = (password) => {
  const salt = crypto.randomBytes(32).toString("hex");
  const genHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return {
    salt,
    hash: genHash,
  };
};

const issueJWTAccess = (user) => {
  const { _id, roles, username } = user;

  const accessTokenExp = "10s";

  const payload = {
    _id,
    username,
    roles,
    iat: Date.now(),
  };

  const accessToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: accessTokenExp,
    algorithm: "RS256",
  });

  return {
    accessToken,
    expires: accessTokenExp,
  };
};

const issueJWTRefresh = (user) => {
  const { _id, roles, username } = user;

  const refreshTokenExp = "1d";

  const payload = {
    _id,
    username,
    roles,
    iat: Date.now(),
  };

  const refreshToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: refreshTokenExp,
    algorithm: "RS256",
  });

  return {
    refreshToken,
    expires: refreshTokenExp,
  };
};

module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;
module.exports.issueJWTAccess = issueJWTAccess;
module.exports.issueJWTRefresh = issueJWTRefresh;
