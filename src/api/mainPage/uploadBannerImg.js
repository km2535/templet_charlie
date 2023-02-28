export const uploadBannerImg = async (file) => {
  for (let i = 0; i < file.length; i++) {
    const formData = new FormData();
    formData.append("fileId", "banner");
    formData.append("filename", file[i]?.name);
    formData.append("userfile", file[i]);
    await fetch(`${process.env.REACT_APP_API_MAINPAGE_URL}/uploadImg.php`, {
      method: "POST",
      body: formData,
    }).then((res) => res.text());
  }
};
