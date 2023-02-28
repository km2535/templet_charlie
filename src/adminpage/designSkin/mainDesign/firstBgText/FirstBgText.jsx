import React from "react";
import styles from "./FirstBgText.module.css";

export default function FirstBgText({ mainPage, setMainPage }) {
  const changeHandler = (e) => {
    const { id, value } = e.target;
    setMainPage((prev) => ({ ...prev, [id]: value }));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>텍스트 배경1 : &nbsp;</div>
        <input
          id="FIRST_SECTION_BG_TITLE"
          onChange={changeHandler}
          className={styles.text}
          defaultValue={mainPage.FIRST_SECTION_BG_TITLE}
        />
      </div>
    </div>
  );
}
