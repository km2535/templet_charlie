export const readQnaCnt = async (setTotalCnt) => {
  fetch(`${process.env.REACT_APP_API_QNA_URL}/qnaCount.php`, {
    method: "POST",
  })
    .then((data) => data.text())
    .then((res) => setTotalCnt(res));
};
