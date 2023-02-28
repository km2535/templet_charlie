import React, { useRef, useState } from "react";
import styles from "./SectionItem.module.css";
import imageCompression from "browser-image-compression";
import { removeImg } from "../../../../../api/subPage/removeImg";
import { uploadSectionImg } from "../../../../../api/subPage/uploadSectionImg";

export default function SectionItem({
  sectionTitle,
  descTitle,
  descDetail,
  imgUrl,
  index,
  section,
  setSection,
}) {
  const [newSection, setNewSection] = useState(section);
  const [previewImg, setPreviewImg] = useState("");
  const ref = useRef();
  const changeHandler = (e) => {
    const { value, id, files } = e.target;
    const options = {
      maxSizeMb: 1,
      maxWidthOrHeight: 800,
    };
    if (files) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.includes("image")) {
          setPreviewImg({
            backgroundImage: `url(${URL.createObjectURL(files[i])})`,
          });
          setNewSection((prev) =>
            [...prev].map((item) =>
              item.id === index
                ? { ...item, imgUrl: `${files[i]?.name}` }
                : item
            )
          );
          imageCompression(files[i], options).then((v) => {
            removeImg("section" + index).then(() => {
              uploadSectionImg(v, "section" + index);
              ref.current.focus();
            });
          });
        }
      }
    } else {
      setNewSection((prev) =>
        [...prev].map((item) =>
          item.id === index ? { ...item, [id]: value } : item
        )
      );
    }
  };

  const changeBlur = () => {
    setSection(newSection);
  };
  return (
    <div className={styles.content}>
      <input
        className={styles.bgInput}
        accept="image/*"
        type="file"
        id={index}
        onChange={changeHandler}
      />
      <label htmlFor={index} className={styles.content}>
        <div
          className={styles.img}
          style={
            previewImg || {
              backgroundImage: `url(${process.env.REACT_APP_URL_SUBPAGE}/${
                "section" + index
              }/${imgUrl})`,
            }
          }
        >
          <div className={styles.description}>
            <input
              onBlur={changeBlur}
              onChange={changeHandler}
              className={styles.number}
              type="text"
              id="sectionTitle"
              defaultValue={sectionTitle}
            />
            <input
              onBlur={changeBlur}
              onChange={changeHandler}
              type="text"
              id="descTitle"
              ref={ref}
              defaultValue={descTitle}
              className={styles.descTitle}
            />
            <textarea
              onBlur={changeBlur}
              onChange={changeHandler}
              className={styles.descDetail}
              name=""
              id="descDetail"
              defaultValue={descDetail}
            ></textarea>
          </div>
        </div>
      </label>
    </div>
  );
}
