export const readProductList = (startPage, endPage, setRooms) => {
  const formData = new FormData();
  formData.append("startPage", startPage);
  formData.append("endPage", endPage);
  fetch(`${process.env.REACT_APP_API_PRODUCTS_URL}/readProductList.php`, {
    method: "POST",
    body: formData,
  })
    .then((data) => data.json())
    .then((res) => {
      setRooms(res);
    });
};
