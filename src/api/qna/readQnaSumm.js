export const readQnaSumm = async (setServiceContent) => {
  fetch(`${process.env.REACT_APP_API_QNA_URL}/readQnaSumm.php`, {
    method: "POST",
  })
    .then((data) => data.json())
    .then((res) => setServiceContent(res));
};
