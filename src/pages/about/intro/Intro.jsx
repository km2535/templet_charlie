import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Intro.module.css";

export default function Intro({ subPage }) {
  const navigate = useNavigate();
  return (
    <>
      {subPage && (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <div
              className={styles.img}
              style={{
                backgroundImage: `url(${process.env.REACT_APP_URL_SUBPAGE}/bottom/${subPage.BOTTOM_IMG})`,
              }}
            ></div>
          </div>
          <div className={styles.content}>
            <div className={styles.description}>
              <div className={styles.title}>{subPage.BOTTOM_TITLE}</div>
              <div className={styles.subDesc}>{subPage.BOTTOM_DESC}</div>
              <div
                className={styles.linkDesc}
                onClick={() =>
                  navigate(process.env.REACT_APP_API_SUB_OPTION_TWO_URL)
                }
              >
                <div>MORE VIEW</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
