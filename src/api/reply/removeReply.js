export const removeReply = async (reply) => {
  const { ID, REPLY_ID } = reply;
  const formData = new FormData();
  formData.append("ID", ID);
  formData.append("REPLY_ID", REPLY_ID);
  await fetch(`${process.env.REACT_APP_API_REPLY_URL}/removeReply.php`, {
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
