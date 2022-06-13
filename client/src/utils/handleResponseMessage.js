import messages from "./messages-en.json";

export const handleResponseMessage = (err) => {
  const status = err.response.status;
  const data = err.response.data;
  console.log(err);
  // LOGIN
  if (data === "wrong username") return messages.error.user.INCORRECT_USERNAME;
  if (data === "wrong password") return messages.error.user.INCORRECT_PASS;
  // SIGNUP
  if (data === "duplicate username")
    return messages.error.user.DUPLICATE_USERNAME;
  if (data === "duplicate email") return messages.error.user.DUPLICATE_EMAIL;

  // PHOTOS
  if (data === "no photo to delete")
    return messages.error.user.NO_PHOTO_TO_DELETE;

  if (status === 500) return messages.error.server.SERVER_DOWN;
  if (status === 401) return messages.error.user.UNAUTHORIZED;
};
