export const removeProductImgOnce = async (product) => {
  const { id, fileName } = product;
  const formData = new FormData();
  formData.append("fileId", id);
  formData.append("fileName", fileName);

  await fetch(
    `${process.env.REACT_APP_API_PRODUCTS_URL}/removeProductImgOnce.php`,
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
