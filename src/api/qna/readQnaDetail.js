export const checkPassword = async (data) => {
  const { ID } = data;
  const formData = new FormData();
  formData.append("ID", ID);
  let result;
  await fetch(`${process.env.REACT_APP_API_QNA_URL}/passwordQna.php`, {
    method: "POST",
    body: formData,
  })
    .then((data) => data.text())
    .then((res) => {
      result = res;
    });
  return result;
};

export const readQnaDetail = async (data) => {
  const { ID, setBoard } = data;
  const formData = new FormData();
  formData.append("ID", ID);
  fetch(`${process.env.REACT_APP_API_QNA_URL}/readQna.php`, {
    method: "POST",
    body: formData,
  })
    .then((data) => data.json())
    .then((res) => {
      setBoard(res);
    });
};
