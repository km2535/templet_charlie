import React from "react";
import styles from "./Banner.module.css";
import Typewriter from "typewriter-effect";

export default function Banner({ subPage }) {
  return (
    <div className={styles.container}>
      {subPage && (
        <>
          <div
            className={styles.imgContainer}
            style={{
              backgroundImage: `url(${process.env.REACT_APP_URL_SUBPAGE}/banner/${subPage.BANNER_IMG})`,
            }}
          ></div>
          <div className={styles.ment}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(subPage.BANNER_TITLE)
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString(subPage.BANNER_SUBTITLE)
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
        </>
      )}
    </div>
  );
}
