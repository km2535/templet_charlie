import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleBtn from "../../ui/login/google/GoogleBtn";
import KakaoBtn from "../../ui/login/kakao/KakaoBtn";
import NaverBtn from "../../ui/login/naver/NaverBtn";
import styles from "./Login.module.css";
export default function Login() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title} onClick={() => navigate("/")}>
          LOGIN
        </div>
        <div className={styles.socialLogin}>
          <NaverBtn />
          <KakaoBtn />
          <GoogleBtn />
        </div>
        <div className={styles.description}>
          * 별도의 회원가입이 필요없습니다.
        </div>
      </div>
    </div>
  );
}
