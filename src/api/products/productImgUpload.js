export const productImgUpload = async (file, product) => {
  const { ID } = product;
  for (let i = 0; i < file.length; i++) {
    const formData = new FormData();
    formData.append("fileId", ID);
    formData.append("filename", file[i]?.name);
    formData.append("userfile", file[i]);
    await fetch(`${process.env.REACT_APP_API_PRODUCTS_URL}/addProductImg.php`, {
      method: "POST",
      body: formData,
    }).then((res) => res.text());
  }
};
