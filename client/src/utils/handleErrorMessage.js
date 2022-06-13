import messages from "./messages-en.json";

export const handleErrorMessage = (err) => {
  const status = err.status;
  const data = err.response.data;
  console.log(err);
  if (data === "wrong username") return messages.error.user.INCORRECT_USERNAME;
  if (data === "wrong password") return messages.error.user.INCORRECT_PASS;
};
