export const googleLogin = (accessToken, setUser) => {
  // 추가로 db내에 관리자 아이디와 같다면 isAdmin을 true로 저장한다
  fetch(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
    { method: "GET" }
  )
    .then((res) => res.json())
    .then((data) => {
      checkAdmin(data, setUser);
    });
};

const checkAdmin = async (USER, setUser) => {
  if (USER) {
    const formData = new FormData();
    formData.append("USER_EMAIL", USER.email);
    await fetch(`${process.env.REACT_APP_API_USER_URL}/checkAdmin.php`, {
      method: "POST",
      body: formData,
    })
      .then((data) => data.text())
      .then((res) =>
        res
          ? setUser({
              ID: USER?.id,
              USER_EMAIL: USER.email || "",
              NAME: "관리자",
              PROFILE: USER?.picture || "",
              IsAdmin: true,
            })
          : setUser({
              ID: USER?.id,
              USER_EMAIL: USER.email || "",
              NAME: USER?.name || "",
              PROFILE: USER?.picture || "",
              IsAdmin: false,
            })
      );
  }
};
