import React from "react";
import styles from "./Banner.module.css";
import imageCompression from "browser-image-compression";

export default function Banner({
  setSubPage,
  previewBannerImg,
  subPage,
  setPreviewBannerImg,
  setBannerImgFile,
}) {
  const changeHandler = (e) => {
    const { id, value, files } = e.target;
    if (id === "BANNER_IMG") {
      const options = {
        maxSizeMb: 1,
        maxWidthOrHeight: 800,
      };
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.includes("image")) {
          setSubPage((prev) => ({ ...prev, [id]: `${files[i]?.name}` }));
          setPreviewBannerImg({
            backgroundImage: `url(${URL.createObjectURL(files[i])})`,
          });
          imageCompression(files[i], options).then((v) => {
            setBannerImgFile(v);
          });
        }
      }
    } else {
      setSubPage((prev) => ({ ...prev, [id]: value }));
    }
  };

  return (
    <div className={styles.bannerContainer}>
      <input
        className={styles.bg1Input}
        accept="image/*"
        type="file"
        id="BANNER_IMG"
        onChange={changeHandler}
      />
      <label htmlFor="BANNER_IMG">
        <div
          className={styles.bg1ImgContainer}
          style={
            previewBannerImg || {
              backgroundImage: `url(${process.env.REACT_APP_URL_SUBPAGE}/banner/${subPage.BANNER_IMG})`,
            }
          }
        ></div>
      </label>
      <div className={styles.ment}>
        <input
          type="text"
          className={styles.mainMent}
          id="BANNER_TITLE"
          defaultValue={subPage.BANNER_TITLE}
          onChange={changeHandler}
        />
        <input
          type="text"
          id="BANNER_SUBTITLE"
          className={styles.mainMent}
          defaultValue={subPage.BANNER_SUBTITLE}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
}
