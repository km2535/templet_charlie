import React, { useState } from "react";
import styles from "./SummationDescription.module.css";
export default function SummationDescription({ setSimple, id }) {
  const [summ, setSumm] = useState("");
  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "SUMMATION_DESCRIPTIONS") {
      setSumm(value);
    } else {
      setSimple((prev) => ({ ...prev, [summ]: value }));
    }
  };

  return (
    <>
      <select
        id={id}
        name="SUMMATION_DESCRIPTIONS"
        className={styles.summ}
        onChange={onchangeHandler}
      >
        <option value="">선택하세요</option>
        <option value="FaBath">욕실타입</option>
        <option value="FaBed">침실타입</option>
        <option value="BsFillPeopleFill">인원</option>
        <option value="SlSizeFullscreen">면적</option>
        <option value="BsImageFill">전망</option>
        <option value="IoLocationSharp">위치</option>
        <option value="IoTime">체크인/체크아웃</option>
        <option value="MdMiscellaneousServices">기 타</option>
      </select>
      <input
        type="text"
        placeholder="해당 정보를 입력하세요."
        id="description"
        className={styles.summInput}
        onChange={onchangeHandler}
      />
    </>
  );
}
