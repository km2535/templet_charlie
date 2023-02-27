import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Intro.module.css";

export default function Intro() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${process.env.REACT_APP_API_URL}/images/lobby.jpg)`,
          }}
        ></div>
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.title}>MIN HOTEL</div>
          <div className={styles.subDesc}>
            <div>여기에 여러분의 고객에게</div>
            <div>회사에 대해서 알리고 싶은 글들을</div>
            <div>
              적으시면 고객들에게 더욱 깊은 감동을 전해주실 수 있습니다.
            </div>
          </div>
          <div
            className={styles.linkDesc}
            onClick={() =>
              navigate(process.env.REACT_APP_API_SUB_OPTION_TWO_URL)
            }
          >
            <div>MORE VIEW</div>
          </div>
        </div>
      </div>
    </div>
  );
}
