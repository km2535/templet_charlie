export const readProducts = async (setProducts) => {
  fetch(`${process.env.REACT_APP_API_PRODUCTS_URL}/productForBanner.php`, {
    method: "POST",
  })
    .then((data) => data.json())
    .then((res) => {
      setProducts(res);
    });
};
