export const removeReplyImg = async (reply) => {
  const { REPLY_ID } = reply;
  const formData = new FormData();
  formData.append("fileId", REPLY_ID);
  await fetch(`${process.env.REACT_APP_API_REPLY_URL}/removeReplyImg.php`, {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
