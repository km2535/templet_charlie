export const uploadService = async (service) => {
  const {
    ID,
    TITLE,
    PRICE,
    DETAIL_DESCRIPTION,
    PROVIDE_SERVICE,
    SUMMATION_DESCRIPTIONS,
    THUMBNAIL_IMG,
    IMAGE_URLS,
  } = service;
  const formData = new FormData();
  formData.append("ID", ID);
  formData.append("TITLE", TITLE);
  formData.append("PRICE", PRICE);
  formData.append("DETAIL_DESCRIPTION", DETAIL_DESCRIPTION);
  formData.append("PROVIDE_SERVICE", PROVIDE_SERVICE);
  formData.append("SUMMATION_DESCRIPTIONS", SUMMATION_DESCRIPTIONS);
  formData.append("THUMBNAIL_IMG", THUMBNAIL_IMG);
  formData.append("IMAGE_URLS", IMAGE_URLS);
  await fetch(`${process.env.REACT_APP_API_SERVICES_URL}/addService.php`, {
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
