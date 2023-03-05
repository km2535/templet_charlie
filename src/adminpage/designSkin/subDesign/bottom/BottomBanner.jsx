import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BottomBanner.module.css";
import imageCompression from "browser-image-compression";

export default function BottomBanner({
  subPage,
  setSubPage,
  setPreviewBottomImg,
  setBottomImgFile,
  previewBottomImg,
}) {
  const navigate = useNavigate();
  const changeHandler = (e) => {
    const { id, value, files } = e.target;
    if (id === "BOTTOM_IMG") {
      const options = {
        maxSizeMb: 1,
        maxWidthOrHeight: 2000,
      };
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.includes("image")) {
          setSubPage((prev) => ({ ...prev, [id]: `${files[i]?.name}` }));
          setPreviewBottomImg({
            backgroundImage: `url(${URL.createObjectURL(files[i])})`,
          });
          imageCompression(files[i], options).then((v) => {
            setBottomImgFile(v);
          });
        }
      }
    } else {
      setSubPage((prev) => ({ ...prev, [id]: value }));
    }
  };
  return (
    <div>
      {subPage && (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <input
              className={styles.bg1Input}
              accept="image/*"
              type="file"
              id="BOTTOM_IMG"
              onChange={changeHandler}
            />
            <label htmlFor="BOTTOM_IMG">
              <div
                className={styles.img}
                style={
                  previewBottomImg || {
                    backgroundImage: `url(${process.env.REACT_APP_URL_SUBPAGE}/bottom/${subPage.BOTTOM_IMG})`,
                  }
                }
              ></div>
            </label>
          </div>
          <div className={styles.content}>
            <div className={styles.description}>
              <input
                id="BOTTOM_TITLE"
                type="text"
                className={styles.title}
                onChange={changeHandler}
                defaultValue={subPage.BOTTOM_TITLE}
              />
              <textarea
                id="BOTTOM_DESC"
                type="text"
                className={styles.subDesc}
                defaultValue={subPage.BOTTOM_DESC}
                onChange={changeHandler}
              />
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
    </div>
  );
}
