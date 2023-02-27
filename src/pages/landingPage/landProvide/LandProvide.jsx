import React, { useEffect, useState } from "react";
import LandText from "../landText/LandText";
import styles from "./LandProvide.module.css";

export default function LandProvide() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [thirth, setThirth] = useState(false);
  useEffect(() => {
    const first = document.getElementById("first");
    const second = document.getElementById("second");
    const thirth = document.getElementById("thirth");
    const showTitle = new IntersectionObserver(
      (entries) => {
        entries.forEach((ent) => setFirst(ent.isIntersecting));
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    const showSecond = new IntersectionObserver(
      (entries) => {
        entries.forEach((ent) => setSecond(ent.isIntersecting));
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    const showThirth = new IntersectionObserver(
      (entries) => {
        entries.forEach((ent) => setThirth(ent.isIntersecting));
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    showTitle.observe(first);
    showSecond.observe(second);
    showThirth.observe(thirth);
  }, []);
  return (
    <div className={styles.container}>
      <div className={first ? styles.first : styles.none} id="first">
        <div className={styles.img}>
          <img src={`${process.env.REACT_APP_API_URL}/images/bg3.jpg`} alt="" />
        </div>
        <div className={styles.description} id="first_description">
          <div className={styles.title}>핸드드립 커피제공</div>
          <div className={styles.subTitle}>
            <div>아침을 풍부한 크리마로 여행의 진미를</div>
            <div>더해주는 커피를 제공합니다.</div>
          </div>
        </div>
      </div>
      <LandText text={"FACILITY"} position={-300} />
      <div className={second ? styles.second : styles.noneSecond} id="second">
        <div className={styles.description}>
          <div className={styles.title}>풍부한 주변 볼거리리</div>
          <div className={styles.subTitle}>
            <div>민 호텔만의 풍부한 주변 볼거리와 맛집들로</div>
            <div>여러분들의 여행지도를 채워나가보세요.</div>
          </div>
        </div>
        <div className={styles.img}>
          <img src={`${process.env.REACT_APP_API_URL}/images/bg2.jpg`} alt="" />
        </div>
      </div>
      <div className={thirth ? styles.thirth : styles.none} id="thirth">
        <div className={styles.img}>
          <img src={`${process.env.REACT_APP_API_URL}/images/bg4.jpg`} alt="" />
        </div>
        <div className={styles.description}>
          <div className={styles.title}>나만의 인생샷</div>
          <div className={styles.subTitle}>
            <div>인생샷을 찍을 수 있는 다양한 포토존과</div>
            <div>인스타그램 홍보 시 할인권을 제공합니다.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
