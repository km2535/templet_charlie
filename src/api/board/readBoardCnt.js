export const readBoardCnt = async (setTotalCnt) => {
  fetch(`${process.env.REACT_APP_API_BOARDS_URL}/boardCount.php`, {
    method: "POST",
  })
    .then((data) => data.text())
    .then((res) => setTotalCnt(res));
};
