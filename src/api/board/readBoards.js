export const readBoards = async (startPage, endPage, setBoards) => {
  const formData = new FormData();
  formData.append("startPage", startPage);
  formData.append("endPage", endPage);
  fetch(`${process.env.REACT_APP_API_BOARDS_URL}/readBoardList.php`, {
    method: "POST",
    body: formData,
  })
    .then((data) => data.json())
    .then((res) => {
      setBoards(res);
    });
};
