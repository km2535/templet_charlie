export const uploadBoard = async (board) => {
  const { ID, WRITER, TITLE, DESCRIPTION, IMAGE_URLS, FILE_URLS } = board;
  const formData = new FormData();
  formData.append("ID", ID);
  formData.append("WRITER", WRITER);
  formData.append("TITLE", TITLE);
  formData.append("DESCRIPTION", DESCRIPTION);
  formData.append("IMAGE_URLS", IMAGE_URLS);
  formData.append("FILE_URLS", FILE_URLS);
  formData.append("READ_CNT", 0);
  await fetch(`${process.env.REACT_APP_API_BOARDS_URL}/addBoard.php`, {
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
