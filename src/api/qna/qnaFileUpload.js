export const qnaFileUpload = (file, qna) => {
  const { ID } = qna;
  for (let i = 0; i < file.length; i++) {
    const formData = new FormData();
    formData.append("fileId", ID);
    formData.append("filename", file[i]?.name);
    formData.append("userfile", file[i]);
    fetch(`${process.env.REACT_APP_API_QNA_URL}/addQnaFiles.php`, {
      method: "POST",
      body: formData,
    }).then((res) => res.text());
  }
};
