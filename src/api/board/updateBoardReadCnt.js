export const updateBoardReadCnt = async (boardId) => {
  const { ID, READ_CNT, DATE } = boardId;
  const formData = new FormData();
  formData.append("ID", ID);
  formData.append("READ_CNT", READ_CNT);
  formData.append("DATE", DATE);
  await fetch(
    `${process.env.REACT_APP_API_BOARDS_URL}/updateBoardReadCnt.php`,
    {
      method: "POST",
      body: formData,
    }
  )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
