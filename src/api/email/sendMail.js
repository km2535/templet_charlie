export const sendMail = async (addQna) => {
  const { TITLE, DESCRIPTION, WRITER } = addQna;
  const formData = new FormData();
  formData.append("subject", TITLE);
  formData.append("Message", DESCRIPTION);
  formData.append("WRITER", WRITER);

  await fetch(
    `${process.env.REACT_APP_API_URL}/service/src/PHPMailer/src/index.php`,
    {
      method: "POST",
      body: formData,
    }
  )
    .then((res) => res)
    .catch((err) => {
      console.log(err);
    });
};
