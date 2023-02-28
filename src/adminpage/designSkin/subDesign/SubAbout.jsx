import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { readSubPage } from "../../../api/subPage/readSubPage";
import { removeImg } from "../../../api/subPage/removeImg";
import { uploadSectionImg } from "../../../api/subPage/uploadSectionImg";
import { updateMainDesign } from "../../../api/subPage/uploadSubDesign";
import Button from "../../ui/Button";
import Banner from "./banner/Banner";
import BottomBanner from "./bottom/BottomBanner";
import Section from "./section/Section";
import styles from "./SubAbout.module.css";

export default function SubAbout() {
  const [subPage, setSubPage] = useState();
  const [previewBannerImg, setPreviewBannerImg] = useState(null);
  const [bannerImgFile, setBannerImgFile] = useState(null);
  const [previewBottomImg, setPreviewBottomImg] = useState(null);
  const [bottomImgFile, setBottomImgFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    readSubPage(setSubPage);
  }, []);

  const fileSubmit = (e) => {
    e.preventDefault();
    removeImg("banner").then(() => {
      uploadSectionImg(bannerImgFile, "banner");
    });
    removeImg("bottom").then(() => {
      uploadSectionImg(bottomImgFile, "bottom");
    });
    updateMainDesign(subPage);
    alert("수정이 완료되었습니다.");
    navigate("/admin");
  };
  return (
    <form onSubmit={fileSubmit} className={styles.container}>
      {subPage && (
        <>
          {/* 베너 */}
          <Banner
            setBannerImgFile={setBannerImgFile}
            setSubPage={setSubPage}
            subPage={subPage}
            setPreviewBannerImg={setPreviewBannerImg}
            previewBannerImg={previewBannerImg}
          />
          {/* 세션 */}
          <Section subPage={subPage} setSubPage={setSubPage} />
          {/* 바텀베너 */}
          <BottomBanner
            previewBottomImg={previewBottomImg}
            setPreviewBottomImg={setPreviewBottomImg}
            setBottomImgFile={setBottomImgFile}
            subPage={subPage}
            setSubPage={setSubPage}
          />
        </>
      )}
      <div className={styles.btn}>
        <Button title={"변경"} type={"submit"} />
        <Button
          title={"뒤로가기"}
          type={"button"}
          callback={() => navigate("/admin")}
          sub
        />
      </div>
    </form>
  );
}
