import React, { useEffect, useState } from "react";
import LandText from "../landText/LandText";
import styles from "./LandProvide.module.css";

export default function LandProvide({ mainPage }) {
  const {
    SECTION_FIRST_IMG,
    SECTION_FIRST_TITLE,
    SECTION_FIRST_DESC,
    SECTION_SECOND_IMG,
    SECTION_SECOND_TITLE,
    SECTION_SECOND_DESC,
    SECTION_THIRD_IMG,
    SECTION_THIRD_TITLE,
    SECTION_THIRD_DESC,
    FIRST_SECTION_BG_TITLE,
  } = mainPage;

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
    mainPage && showTitle.observe(first);
    mainPage && showSecond.observe(second);
    mainPage && showThirth.observe(thirth);
  }, [mainPage]);
  return (
    <>
      {mainPage && (
        <div className={styles.container}>
          <div className={first ? styles.first : styles.none} id="first">
            <div className={styles.img}>
              <img
                src={`${process.env.REACT_APP_URL_MAINPAGE}/section0/${SECTION_FIRST_IMG}`}
                alt=""
              />
            </div>
            <div className={styles.description} id="first_description">
              <div className={styles.title}>{SECTION_FIRST_TITLE}</div>
              <div className={styles.subTitle}>
                <div>{SECTION_FIRST_DESC}</div>
              </div>
            </div>
          </div>
          <LandText text={FIRST_SECTION_BG_TITLE} position={-300} />
          <div
            className={second ? styles.second : styles.noneSecond}
            id="second"
          >
            <div className={styles.description}>
              <div className={styles.title}>{SECTION_SECOND_TITLE}</div>
              <div className={styles.subTitle}>
                <div>{SECTION_SECOND_DESC}</div>
              </div>
            </div>
            <div className={styles.img}>
              <img
                src={`${process.env.REACT_APP_URL_MAINPAGE}/section1/${SECTION_SECOND_IMG}`}
                alt=""
              />
            </div>
          </div>
          <div className={thirth ? styles.thirth : styles.none} id="thirth">
            <div className={styles.img}>
              <img
                src={`${process.env.REACT_APP_URL_MAINPAGE}/section2/${SECTION_THIRD_IMG}`}
                alt=""
              />
            </div>
            <div className={styles.description}>
              <div className={styles.title}>{SECTION_THIRD_TITLE}</div>
              <div className={styles.subTitle}>
                <div>{SECTION_THIRD_DESC}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
