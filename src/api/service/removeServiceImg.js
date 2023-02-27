export const removeServiceImg = async (product) => {
  const { ID } = product;
  const formData = new FormData();
  formData.append("fileId", ID);
  await fetch(
    `${process.env.REACT_APP_API_SERVICES_URL}/removeServiceImg.php`,
    {
      method: "POST",
      body: formData,
    }
  )
    .then((res) => {
      return console.log(res);
    })
    .catch((err) => {
      return err;
    });
};
