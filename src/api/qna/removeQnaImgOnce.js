export const removeQnaImgOnce = async (board) => {
  const { id, fileName } = board;
  const formData = new FormData();
  formData.append("fileId", id);
  formData.append("fileName", fileName);
  await fetch(`${process.env.REACT_APP_API_QNA_URL}/removeQnaImgOnce.php`, {
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
