import React, { useState } from "react";
import styles from "./BottomSection.module.css";
export default function BottomSection({ mainPage, setMainPage }) {
  const [directInput, setDirectInput] = useState(false);
  const changeHandler = (e) => {
    const { id, value } = e.target;
    if (value === "direct") {
      setDirectInput(true);
    } else {
      setDirectInput(false);
    }
    setMainPage((prev) => ({ ...prev, [id]: value }));
  };
  const directHandler = (e) => {
    const { id, value } = e.target;
    setMainPage((prev) => ({ ...prev, [id]: value }));
  };
  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>서비스1</div>
        <div className={styles.slider}>서비스2</div>
        <div className={styles.slider}>서비스3</div>
      </div>

      <div
        className={styles.bg}
        style={{ backgroundColor: `${mainPage.BOTTOM_BG_COLOR}` }}
      ></div>
      <div className={styles.changeBg}>
        <div className={styles.title}>배경색 바꾸기</div>
        <div className={styles.select}>
          <select name="" id="BOTTOM_BG_COLOR" onChange={changeHandler}>
            <option value="#E5CCAF">그레이 샌드</option>
            <option value="#BFCAD6">플레인 에어</option>
            <option value="#EDCDC2">펄 도그우드</option>
            <option value="#B0B0A9">아게이트 그레이</option>
            <option value="#AF2646">비바마젠다</option>
            <option value="direct">직접입력</option>
          </select>
          {directInput && (
            <input
              className={styles.input}
              onChange={directHandler}
              type="text"
              name="directInput"
              id="BOTTOM_BG_COLOR"
              placeholder="#16진수코드를 입력하세요."
              required
            />
          )}
        </div>
      </div>
      <div className={styles.subTitle}>
        * 배경색을 바꾸면 사이드 메뉴바의 색상도 바뀝니다.
      </div>
    </div>
  );
}
