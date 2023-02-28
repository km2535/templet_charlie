import React from "react";
import styles from "./Banner.module.css";
import imageCompression from "browser-image-compression";

export default function Banner({
  setImgUrl,
  setPreviewBannerImg,
  setBannerImgFile,
  setMainPage,
  previewBannerImg,
  mainPage,
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
          setImgUrl(`${files[i]?.name}`);
          setPreviewBannerImg({
            backgroundImage: `url(${URL.createObjectURL(files[i])})`,
          });
          imageCompression(files[i], options).then((v) => {
            setBannerImgFile([v]);
          });
        }
      }
    }
    setMainPage((prev) => ({ ...prev, [id]: value }));
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
              backgroundImage: `url(${process.env.REACT_APP_URL_MAINPAGE}/banner/${mainPage.BANNER_IMG})`,
            }
          }
        ></div>
      </label>
      <div className={styles.ment}>
        <input
          type="text"
          className={styles.mainMent}
          id="BANNER_TITLE"
          defaultValue={mainPage.BANNER_TITLE}
          onChange={changeHandler}
        />
        <input
          type="text"
          id="BANNER_DESC_MAIN"
          className={styles.typing}
          defaultValue={mainPage.BANNER_DESC_MAIN}
          onChange={changeHandler}
        />
        <input
          type="text"
          id="BANNER_DESC_SUB"
          className={styles.typing}
          defaultValue={mainPage.BANNER_DESC_SUB}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
}
