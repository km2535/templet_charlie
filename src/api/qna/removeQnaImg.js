export const removeQnaImg = async (qna) => {
  const { ID } = qna;
  const formData = new FormData();
  formData.append("fileId", ID);
  await fetch(`${process.env.REACT_APP_API_QNA_URL}/removeQnaImg.php`, {
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
