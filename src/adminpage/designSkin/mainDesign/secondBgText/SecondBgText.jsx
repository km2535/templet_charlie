import React from "react";
import styles from "./SecondBgText.module.css";

export default function SecondBgText({ mainPage, setMainPage }) {
  const changeHandler = (e) => {
    const { id, value } = e.target;
    setMainPage((prev) => ({ ...prev, [id]: value }));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>텍스트 배경2 : &nbsp;</div>
        <input
          id="SECOND_SECTION_BG_TITLE"
          onChange={changeHandler}
          className={styles.text}
          defaultValue={mainPage.SECOND_SECTION_BG_TITLE}
        />
      </div>
    </div>
  );
}
