export const removeProductImg = async (product) => {
  const { ID } = product;
  const formData = new FormData();
  formData.append("fileId", ID);
  await fetch(
    `${process.env.REACT_APP_API_PRODUCTS_URL}/removeProductImg.php`,
    {
      method: "POST",
      body: formData,
    }
  )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
