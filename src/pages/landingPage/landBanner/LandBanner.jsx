import React from "react";
import styles from "./LandBanner.module.css";
import Typewriter from "typewriter-effect";

export default function LandBanner({ mainPage }) {
  const { BANNER_IMG, BANNER_TITLE, BANNER_DESC_MAIN, BANNER_DESC_SUB } =
    mainPage;
  return (
    <div className={styles.container}>
      <div
        className={styles.imgContainer}
        style={{
          backgroundImage: `url(${process.env.REACT_APP_URL_MAINPAGE}/banner/${BANNER_IMG})`,
        }}
      ></div>
      <div className={styles.ment}>
        <div className={styles.mainMent}>{BANNER_TITLE}</div>
        <div className={styles.typing}>
          {mainPage && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(`${BANNER_DESC_MAIN}`)
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString(`${BANNER_DESC_SUB}`)
                  .pauseFor(2500)
                  .start();
              }}
              options={{
                delay: 200,
                autoStart: true,
                loop: true,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
