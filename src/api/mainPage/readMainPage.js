export const readMainPage = async (setMainPage) => {
  fetch(`${process.env.REACT_APP_API_MAINPAGE_URL}/readMainPage.php`, {
    method: "POST",
  })
    .then((data) => data.json())
    .then((res) => {
      res.map((v) => setMainPage(v));
    });
};
