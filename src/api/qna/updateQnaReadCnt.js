export const updateQnaReadCnt = async (boardId) => {
  const { ID, READ_CNT, DATE } = boardId;
  const formData = new FormData();
  formData.append("ID", ID);
  formData.append("READ_CNT", READ_CNT);
  formData.append("DATE", DATE);
  await fetch(`${process.env.REACT_APP_API_QNA_URL}/updateQnaReadCnt.php`, {
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
