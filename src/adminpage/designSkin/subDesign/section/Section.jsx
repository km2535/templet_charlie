import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { v4 as uuidv4 } from "uuid";
import SectionItem from "./sectionItem/SectionItem";
export default function Section({ subPage, setSubPage }) {
  const [section, setSection] = useState(null);
  const [directInput, setDirectInput] = useState(false);

  useEffect(() => {
    setSection(JSON.parse(subPage.SECTION));
  }, [subPage.SECTION]);

  useEffect(() => {
    section &&
      setSubPage((prev) => ({ ...prev, SECTION: JSON.stringify(section) }));
  }, [section, setSubPage]);

  const directHandler = (e) => {
    const { id, value } = e.target;
    setSubPage((prev) => ({ ...prev, [id]: value }));
  };
  const changeHandler = (e) => {
    const { id, value } = e.target;
    if (value === "direct") {
      setDirectInput(true);
    } else {
      setDirectInput(false);
    }
    setSubPage((prev) => ({ ...prev, [id]: value }));
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <input
          id="TITLE"
          className={styles.mainTitle}
          defaultValue={subPage.TITLE}
          onChange={changeHandler}
        />
        <textarea
          className={styles.subTitle}
          id={"SUBTITLE"}
          defaultValue={subPage.SUBTITLE}
          onChange={changeHandler}
        />
      </div>
      <div className={styles.imgContent}>
        {section &&
          section.map((v, index) => (
            <SectionItem
              setSubPage={setSubPage}
              setSection={setSection}
              key={uuidv4()}
              section={section}
              sectionTitle={v?.sectionTitle}
              descTitle={v?.descTitle}
              descDetail={v?.descDetail}
              imgUrl={v?.imgUrl}
              index={index}
            />
          ))}
      </div>
      <div
        className={styles.bg}
        style={{ backgroundColor: subPage.BOTTOM_BG_COLOR }}
      ></div>
      <div className={styles.changeBg}>
        <div className={styles.title}>????????? ?????????</div>
        <div className={styles.select}>
          <select name="" id="BOTTOM_BG_COLOR" onChange={changeHandler}>
            <option value="#E5CCAF">????????? ??????</option>
            <option value="#BFCAD6">????????? ??????</option>
            <option value="#EDCDC2">??? ????????????</option>
            <option value="#B0B0A9">???????????? ?????????</option>
            <option value="#AF2646">???????????????</option>
            <option value="direct">????????????</option>
          </select>
          {directInput && (
            <input
              className={styles.input}
              onChange={directHandler}
              type="text"
              name="directInput"
              id="BOTTOM_BG_COLOR"
              placeholder="#16??????????????? ???????????????."
              required
            />
          )}
        </div>
      </div>
    </div>
  );
}
