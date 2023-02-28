import React from "react";
import styles from "./SectionItem.module.css";
export default function SectionItem({
  sectionTitle,
  descTitle,
  descDetail,
  imgUrl,
  index,
}) {
  return (
    <div className={styles.content}>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${process.env.REACT_APP_URL_SUBPAGE}/${
            "section" + index
          }/${imgUrl})`,
        }}
      >
        <div className={styles.cover}></div>
        <div className={styles.description}>
          <div className={styles.number}>{sectionTitle}</div>
          <div className={styles.descTitle}>{descTitle}</div>
          <div className={styles.descDetail}>{descDetail}</div>
        </div>
      </div>
    </div>
  );
}
