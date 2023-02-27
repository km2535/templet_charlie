export const removeService = async (product) => {
  const { ID } = product;
  const formData = new FormData();
  formData.append("ID", ID);
  await fetch(`${process.env.REACT_APP_API_SERVICES_URL}/removeService.php`, {
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
