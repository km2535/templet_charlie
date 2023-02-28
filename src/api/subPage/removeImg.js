export const removeImg = async (removeFolder) => {
  const formData = new FormData();
  formData.append("fileId", removeFolder);

  await fetch(`${process.env.REACT_APP_API_SUBPAGE_URL}/removeSubPageImg.php`, {
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
