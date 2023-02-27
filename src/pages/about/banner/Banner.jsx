import React from "react";
import styles from "./Banner.module.css";
import Typewriter from "typewriter-effect";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div
        className={styles.imgContainer}
        style={{
          backgroundImage: `url(${process.env.REACT_APP_API_URL}/images/bg8.jpg)`,
        }}
      ></div>
      <div className={styles.ment}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("ABOUT YOUR LIFE")
              .pauseFor(2500)
              .deleteChars(9)
              .typeString("MIN HOTEL")
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
  );
}
