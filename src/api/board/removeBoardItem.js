export const removeBoardItem = async (board) => {
  const { ID } = board;
  const formData = new FormData();
  formData.append("ID", ID);
  await fetch(`${process.env.REACT_APP_API_BOARDS_URL}/removeBoardItem.php`, {
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
