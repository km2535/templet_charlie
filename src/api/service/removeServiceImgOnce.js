export const removeServiceImgOnce = async (service) => {
  const { id, fileName } = service;
  const formData = new FormData();
  formData.append("fileId", id);
  formData.append("fileName", fileName);

  await fetch(
    `${process.env.REACT_APP_API_SERVICES_URL}/removeServiceImgOnce.php`,
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
