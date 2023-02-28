import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import SectionItem from "./sectionItem/SectionItem";
import { v4 as uuidv4 } from "uuid";

export default function Section({ subPage }) {
  const [section, setSection] = useState(null);
  useEffect(() => {
    subPage && setSection(JSON.parse(subPage.SECTION));
  }, [subPage]);
  return (
    <div className={styles.container}>
      {subPage && (
        <>
          <div className={styles.title}>
            <div className={styles.mainTitle}>{subPage.TITLE}</div>
            <div className={styles.subTitle}>{subPage.SUBTITLE}</div>
          </div>
          <div className={styles.imgContent}>
            {section &&
              section.map((v, index) => (
                <SectionItem
                  key={uuidv4()}
                  sectionTitle={v?.sectionTitle}
                  descTitle={v?.descTitle}
                  descDetail={v?.descDetail}
                  imgUrl={v?.imgUrl}
                  index={index}
                />
              ))}
          </div>
        </>
      )}
      <div
        className={styles.bg}
        style={{ backgroundColor: subPage?.BOTTOM_BG_COLOR }}
      ></div>
    </div>
  );
}
