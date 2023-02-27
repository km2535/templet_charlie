export const kakaoLogin = async (code) => {
  await fetch(
    `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_LOGIN_REST_API}&redirect_uri=${process.env.REACT_APP_API_REDIRECT_URL}&code=${code}&client_secret=${process.env.REACT_APP_KAKAO_CLIENT_SECRET_API}`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) =>
      window.sessionStorage.setItem("kakaAccess", data?.access_token)
    );
};

export const kakaoLog = async (kakaoAccess, setUser) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${kakaoAccess}`);

  await fetch(`https://kapi.kakao.com/v2/user/me`, {
    method: "POST",
    headers: myHeaders,
    redirect: "manual",
  })
    .then((res) => res.json())
    .then((data) =>
      setUser({
        ID: data.id,
        USER_EMAIL: data.kakao_account?.email || "",
        NAME: data?.kakao_account?.profile?.nickname || "",
        PROFILE: data?.kakao_account?.profile?.profile_image_url || "",
        IsAdmin: false,
      })
    );
};
