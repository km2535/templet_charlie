import React from "react";
import styles from "./LandBanner.module.css";
import Typewriter from "typewriter-effect";

export default function LandBanner() {
  return (
    <div className={styles.container}>
      <div
        className={styles.imgContainer}
        style={{
          backgroundImage: `url(${process.env.REACT_APP_API_URL}/images/bg1.jpg)`,
        }}
      ></div>
      <div className={styles.ment}>
        <div className={styles.mainMent}>FOR YOUR COMFORTABLE TRAVEL</div>
        <div className={styles.typing}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("당신의 여정과 함께할 민호텔")
                .pauseFor(2500)
                .deleteAll()
                .typeString("#여행 #힐링 #호캉스")
                .pauseFor(2500)
                .start();
            }}
            options={{
              delay: 200,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
