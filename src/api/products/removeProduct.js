export const removeProduct = async (product) => {
  const { ID } = product;
  const formData = new FormData();
  formData.append("ID", ID);
  await fetch(`${process.env.REACT_APP_API_PRODUCTS_URL}/removeProduct.php`, {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
