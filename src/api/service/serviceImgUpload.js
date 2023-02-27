export const serviceImgUpload = async (file, service) => {
  const { ID } = service;
  for (let i = 0; i < file.length; i++) {
    const formData = new FormData();
    formData.append("fileId", ID);
    formData.append("filename", file[i]?.name);
    formData.append("userfile", file[i]);
    await fetch(`${process.env.REACT_APP_API_SERVICES_URL}/addServiceImg.php`, {
      method: "POST",
      body: formData,
    }).then((res) => res.text());
  }
};
