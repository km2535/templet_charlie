import React from "react";
import styles from "./Footer.module.css";
import { SiNaver, SiInstagram } from "react-icons/si";
import { AiOutlineFacebook } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.topInfo}>
        <div
          className={styles.personal}
          onClick={() =>
            navigate(
              process.env.REACT_APP_API_SUB_URL +
                process.env.REACT_APP_API_PERSONAL_URL
            )
          }
        >
          개인정보처리방침
        </div>
        <div
          className={styles.email}
          onClick={() =>
            navigate(
              process.env.REACT_APP_API_SUB_URL +
                process.env.REACT_APP_API_EMAIL_URL
            )
          }
        >
          이메일무단수집금지
        </div>
        <div
          className={styles.use}
          onClick={() =>
            navigate(
              process.env.REACT_APP_API_SUB_URL +
                process.env.REACT_APP_API_USE_URL
            )
          }
        >
          이용약관
        </div>
      </div>
      <div className={styles.mainInfo}>
        <div className={styles.logo}>
          <img
            className={styles.img}
            src={process.env.REACT_APP_API_URL + "/images/logo_white.png"}
            alt=""
          />
        </div>
        <div className={styles.Info}>
          <div className={styles.company}>민호텔</div>
          <div className={styles.addr}>
            서울특별시 중랑구 00로 000-00 민빌딩 | 대표이사 이강민
          </div>
          <div className={styles.companyNum}>
            통신판매신고번호 제2017-경기-000호
          </div>
        </div>
        <div className={styles.sideInfo}>
          <div className={styles.subNabar}>
            <div
              className={styles.menu1}
              onClick={() => navigate(`${process.env.REACT_APP_API_SUB_URL}`)}
            >
              회사소개
            </div>
            <div
              className={styles.menu2}
              onClick={() =>
                navigate(`${process.env.REACT_APP_API_SUB_OPTION_FIVE_URL}`)
              }
            >
              고객센터
            </div>
            <div
              className={styles.menu3}
              onClick={() =>
                navigate(`${process.env.REACT_APP_API_SUB_OPTION_ONE_URL}`)
              }
            >
              찾아오시는 길
            </div>
            <div
              className={styles.menu4}
              onClick={() =>
                navigate(`${process.env.REACT_APP_API_SUB_OPTION_THREE_URL}`)
              }
            >
              서비스 제공
            </div>
          </div>
          <div className={styles.snsContainer}>
            <div className={styles.instar}>
              <SiInstagram />
            </div>
            <div className={styles.facebook}>
              <AiOutlineFacebook />
            </div>
            <div className={styles.naver}>
              <SiNaver />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
