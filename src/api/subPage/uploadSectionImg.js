export const uploadSectionImg = async (file, folder) => {
  const formData = new FormData();
  formData.append("fileId", folder);
  formData.append("filename", file?.name);
  formData.append("userfile", file);
  await fetch(`${process.env.REACT_APP_API_SUBPAGE_URL}/uploadImg.php`, {
    method: "POST",
    body: formData,
  }).then((res) => res.text());
};
