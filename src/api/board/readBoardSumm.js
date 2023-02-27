export const readBoardSumm = async (setServiceContent) => {
  fetch(`${process.env.REACT_APP_API_BOARDS_URL}/readBoardSumm.php`, {
    method: "POST",
  })
    .then((data) => data.json())
    .then((res) => setServiceContent(res));
};
