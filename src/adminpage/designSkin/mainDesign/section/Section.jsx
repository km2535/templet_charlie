import React, { useEffect } from "react";
import styles from "./Section.module.css";
import imageCompression from "browser-image-compression";
import FirstBgText from "../firstBgText/FirstBgText";

export default function Section({
  setSectionImgUrl,
  setSectionImgFile,
  setPreviewSectionImg,
  mainPage,
  previewSectionImg,
  sectionImgUrl,
  setMainPage,
}) {
  useEffect(() => {
    sectionImgUrl[0] &&
      setMainPage((service) => ({
        ...service,
        SECTION_FIRST_IMG: sectionImgUrl[0],
      }));
  }, [setMainPage, sectionImgUrl]);
  useEffect(() => {
    sectionImgUrl[1] &&
      setMainPage((service) => ({
        ...service,
        SECTION_SECOND_IMG: sectionImgUrl[1],
      }));
  }, [setMainPage, sectionImgUrl]);
  useEffect(() => {
    sectionImgUrl[2] &&
      setMainPage((service) => ({
        ...service,
        SECTION_THIRD_IMG: sectionImgUrl[2],
      }));
  }, [setMainPage, sectionImgUrl]);

  const changeHandler = (e) => {
    const { id, value, files } = e.target;
    const options = {
      maxSizeMb: 1,
      maxWidthOrHeight: 800,
    };
    if (id === "SECTION_FIRST_IMG") {
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.includes("image")) {
          setSectionImgUrl((prev) => ({ ...prev, 0: `${files[i]?.name}` }));
          setPreviewSectionImg((prev) => ({
            ...prev,
            0: `${URL.createObjectURL(files[i])}`,
          }));
          imageCompression(files[i], options).then((v) => {
            setSectionImgFile((prev) => ({ ...prev, 0: v }));
          });
        }
      }
    } else if (id === "SECTION_SECOND_IMG") {
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.includes("image")) {
          setSectionImgUrl((prev) => ({ ...prev, 1: `${files[i]?.name}` }));
          setPreviewSectionImg((prev) => ({
            ...prev,
            1: `${URL.createObjectURL(files[i])}`,
          }));
          imageCompression(files[i], options).then((v) => {
            setSectionImgFile((prev) => ({ ...prev, 1: v }));
          });
        }
      }
    } else if (id === "SECTION_THIRD_IMG") {
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.includes("image")) {
          setSectionImgUrl((prev) => ({ ...prev, 2: `${files[i]?.name}` }));
          setPreviewSectionImg((prev) => ({
            ...prev,
            2: `${URL.createObjectURL(files[i])}`,
          }));
          imageCompression(files[i], options).then((v) => {
            setSectionImgFile((prev) => ({ ...prev, 2: v }));
          });
        }
      }
    }
    setMainPage((prev) => ({ ...prev, [id]: value }));
  };
  return (
    <div className={styles.container}>
      <FirstBgText mainPage={mainPage} setMainPage={setMainPage} />
      <div className={styles.first} id="first">
        <input
          className={styles.bg2Input}
          accept="image/*"
          type="file"
          id="SECTION_FIRST_IMG"
          onChange={changeHandler}
        />
        <div className={styles.img}>
          <label htmlFor="SECTION_FIRST_IMG">
            <img
              src={
                previewSectionImg[0] ||
                `${process.env.REACT_APP_URL_MAINPAGE}/section0/${mainPage.SECTION_FIRST_IMG}`
              }
              alt=""
            />
          </label>
        </div>
        <div className={styles.description} id="first_description">
          <input
            id="SECTION_FIRST_TITLE"
            onChange={changeHandler}
            className={styles.title}
            defaultValue={mainPage.SECTION_FIRST_TITLE}
          />
          <div className={styles.subTitle}>
            <textarea
              id="SECTION_FIRST_DESC"
              onChange={changeHandler}
              defaultValue={mainPage.SECTION_FIRST_DESC}
            />
          </div>
        </div>
      </div>

      <div className={styles.second} id="second">
        <div className={styles.description}>
          <input
            id="SECTION_SECOND_TITLE"
            onChange={changeHandler}
            className={styles.title}
            defaultValue={mainPage.SECTION_SECOND_TITLE}
          />
          <div className={styles.subTitle}>
            <textarea
              id="SECTION_SECOND_DESC"
              onChange={changeHandler}
              defaultValue={mainPage.SECTION_SECOND_DESC}
            />
          </div>
        </div>
        <input
          className={styles.bg2Input}
          accept="image/*"
          type="file"
          id="SECTION_SECOND_IMG"
          onChange={changeHandler}
        />
        <div className={styles.img}>
          <label htmlFor="SECTION_SECOND_IMG">
            <img
              src={
                previewSectionImg[1] ||
                `${process.env.REACT_APP_URL_MAINPAGE}/section1/${mainPage.SECTION_SECOND_IMG}`
              }
              alt=""
            />
          </label>
        </div>
      </div>
      <div className={styles.thirth} id="thirth">
        <input
          className={styles.bg2Input}
          accept="image/*"
          type="file"
          id="SECTION_THIRD_IMG"
          onChange={changeHandler}
        />
        <div className={styles.img}>
          <label htmlFor="SECTION_THIRD_IMG">
            <img
              src={
                previewSectionImg[2] ||
                `${process.env.REACT_APP_URL_MAINPAGE}/section2/${mainPage.SECTION_THIRD_IMG}`
              }
              alt=""
            />
          </label>
        </div>
        <div className={styles.description}>
          <input
            id="SECTION_THIRD_TITLE"
            onChange={changeHandler}
            className={styles.title}
            defaultValue={mainPage.SECTION_THIRD_TITLE}
          />
          <div className={styles.subTitle}>
            <textarea
              id="SECTION_THIRD_DESC"
              onChange={changeHandler}
              defaultValue={mainPage.SECTION_THIRD_DESC}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
