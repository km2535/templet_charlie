export const updateProduct = async (product) => {
  const {
    ID,
    TITLE,
    PRICE,
    DETAIL_DESCRIPTION,
    PROVIDE_SERVICE,
    SUMMATION_DESCRIPTIONS,
    THUMBNAIL_IMG,
    IMAGE_URLS,
  } = product;

  const formData = new FormData();
  formData.append("ID", ID);
  formData.append("TITLE", TITLE);
  formData.append("PRICE", PRICE);
  formData.append("DETAIL_DESCRIPTION", DETAIL_DESCRIPTION);
  formData.append("PROVIDE_SERVICE", PROVIDE_SERVICE);
  formData.append("SUMMATION_DESCRIPTIONS", SUMMATION_DESCRIPTIONS);
  formData.append("THUMBNAIL_IMG", THUMBNAIL_IMG);
  formData.append("IMAGE_URLS", IMAGE_URLS);
  formData.append("LIKE", 0);
  await fetch(`${process.env.REACT_APP_API_PRODUCTS_URL}/updateProduct.php`, {
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
