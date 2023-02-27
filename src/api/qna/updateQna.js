export const updateQna = async (board) => {
  const { ID, TITLE, DESCRIPTION, IMAGE_URLS, FILE_URLS } = board;

  const formData = new FormData();
  formData.append("ID", ID);
  formData.append("TITLE", TITLE);
  formData.append("DESCRIPTION", DESCRIPTION);
  formData.append("IMAGE_URLS", IMAGE_URLS);
  formData.append("FILE_URLS", FILE_URLS);
  await fetch(`${process.env.REACT_APP_API_QNA_URL}/updateQna.php`, {
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
