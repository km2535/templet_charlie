import React, { useEffect, useState } from "react";
import { readMainPage } from "../../../api/mainPage/readMainPage";
import styles from "./MainDesign.module.css";
import Button from "../../ui/Button";
import Banner from "./banner/Banner";
import Section from "./section/Section";
import { updateMainDesign } from "../../../api/mainPage/uploadMainDesign";
import { uploadBannerImg } from "../../../api/mainPage/uploadBannerImg";
import { removeImg } from "../../../api/mainPage/removeImg";
import { uploadSectionImg } from "../../../api/mainPage/uploadSectionImg";
import BottomSection from "./bottomSection/BottomSection";
import SecondBgText from "./secondBgText/SecondBgText";
import { useNavigate } from "react-router-dom";

export default function MainDesign() {
  const [mainPage, setMainPage] = useState();
  const [imgUrl, setImgUrl] = useState([]);
  const [bannerImgFile, setBannerImgFile] = useState(null);
  const [previewBannerImg, setPreviewBannerImg] = useState(null);
  const [sectionImgUrl, setSectionImgUrl] = useState({});
  const [sectionImgFile, setSectionImgFile] = useState({});
  const [previewSectionImg, setPreviewSectionImg] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    readMainPage(setMainPage);
  }, []);
  useEffect(() => {
    setMainPage((service) => ({
      ...service,
      BANNER_IMG: imgUrl,
    }));
  }, [imgUrl]);

  const fileSubmit = (e) => {
    e.preventDefault();
    bannerImgFile &&
      removeImg("banner").then(() => {
        uploadBannerImg(bannerImgFile);
      });
    for (const [key, value] of Object.entries(sectionImgFile)) {
      removeImg("section" + key).then(() => {
        uploadSectionImg(value, "section" + key);
      });
    }
    updateMainDesign(mainPage).then(() => {
      alert("수정되었습니다.");
      readMainPage(setMainPage);
      navigate("/admin");
    });
  };
  return (
    <form onSubmit={fileSubmit} className={styles.container}>
      {mainPage && (
        <>
          {/* 베너 */}

          <Banner
            setImgUrl={setImgUrl}
            setPreviewBannerImg={setPreviewBannerImg}
            setBannerImgFile={setBannerImgFile}
            setMainPage={setMainPage}
            previewBannerImg={previewBannerImg}
            mainPage={mainPage}
          />
          {/* 슬라이드 */}
          <div className={styles.slider}>
            이미지를 클릭하여 수정해주세요 <br />
          </div>
          {/* 세션 */}
          <Section
            setSectionImgUrl={setSectionImgUrl}
            setSectionImgFile={setSectionImgFile}
            sectionImgUrl={sectionImgUrl}
            setPreviewSectionImg={setPreviewSectionImg}
            previewSectionImg={previewSectionImg}
            setMainPage={setMainPage}
            mainPage={mainPage}
          />
          <SecondBgText mainPage={mainPage} setMainPage={setMainPage} />
          {/* 마지막 세션 */}
          <BottomSection mainPage={mainPage} setMainPage={setMainPage} />
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
