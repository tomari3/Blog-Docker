export const textAreaAutoSize = (e) => {
  if (e.target.scrollHeight > 33) {
    e.target.style.height = "5px";
    e.target.style.height = e.target.scrollHeight + "px";
  }
};
