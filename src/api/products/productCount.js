export const productCount = (setTotalCnt) => {
  fetch(`${process.env.REACT_APP_API_PRODUCTS_URL}/prodcutCount.php`, {
    method: "POST",
  })
    .then((data) => data.text())
    .then((res) => {
      setTotalCnt(res);
    });
};
