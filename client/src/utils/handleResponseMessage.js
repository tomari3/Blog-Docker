import messages from "./messages-en.json";

export const handleResponseMessage = (res) => {
  const status = res?.status || res?.response?.status;
  const data = res || res?.response?.data;
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
  if (data === "avatar deleted") return messages.success.user.AVATAR_DELETED;
  if (data === "avatar updated") return messages.success.user.AVATAR_UPDATED;

  if (status === 500) return messages.error.server.SERVER_DOWN;
  if (status === 401) return messages.error.user.UNAUTHORIZED;
};
