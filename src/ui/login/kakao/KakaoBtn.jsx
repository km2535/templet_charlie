import React from "react";
import styles from "./KakaoBtn.module.css";

export default function KakaoBtn() {
  const kakaoLoginHandler = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_LOGIN_REST_API}&redirect_uri=${process.env.REACT_APP_API_REDIRECT_URL}&response_type=code`;
  };
  return (
    <>
      <div className={styles.kakaobtn} onClick={kakaoLoginHandler}>
        <div className={styles.kakaoLogo}>
          <div className={styles.kakaoImg}>
            <img
              src={`${process.env.REACT_APP_API_URL}/images/kakao_login.png`}
              alt="google"
            />
          </div>
          <div className={styles.kakaoTxt}>카카오로 로그인</div>
        </div>
      </div>
    </>
  );
}
