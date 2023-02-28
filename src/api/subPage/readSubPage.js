export const readSubPage = async (setSubPage) => {
  fetch(`${process.env.REACT_APP_API_SUBPAGE_URL}/readSubPage.php`, {
    method: "POST",
  })
    .then((data) => data.json())
    .then((res) => {
      res.map((v) => setSubPage(v));
    });
};
