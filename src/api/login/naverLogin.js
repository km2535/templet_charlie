export const naverLogin = async (code, state, setNaverAccess) => {
  const formData = new FormData();
  formData.append("code", code);
  formData.append("state", state);
  formData.append("client_id", process.env.REACT_APP_NAVER_CLIENT_ID_API);
  formData.append(
    "client_secret",
    process.env.REACT_APP_NAVER_CLIENT_SECRET_API
  );

  await fetch(
    `${process.env.REACT_APP_API_URL}/service/src/login/naver/naverGetToken.php`,
    {
      method: "POST",
      body: formData,
    }
  )
    .then((res) => res.json())
    .then((data) => {
      window.sessionStorage.setItem("naverAccess", data?.access_token);
      setNaverAccess(data?.access_token);
    });
};

export const naverLog = (naverAccess, setUser) => {
  const formData = new FormData();
  formData.append("token", naverAccess);

  fetch(
    `${process.env.REACT_APP_API_URL}/service/src/login/naver/naverLogin.php`,
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => response.json())
    .then((data) =>
      setUser({
        ID: data.response?.id,
        USER_EMAIL: data?.response?.email || "",
        NAME: data?.response?.name || "",
        PROFILE: data?.response?.profile_image || "",
        IsAdmin: false,
      })
    )
    .catch((err) => console.log(err));
};
