import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styles from "./RoomDetail.module.css";
import { SwiperSlide, Swiper as SwiperDetail } from "swiper/react";
import { Scrollbar, Autoplay, Navigation } from "swiper";
import Summation from "../../../ui/Summation";
import { BsTelephoneFill } from "react-icons/bs";
import Button from "../../../adminpage/ui/Button";
import "./RoomDetail.css";
import "swiper/css/scrollbar";
import "swiper/css";

export default function RoomDetail() {
  const {
    state: {
      TITLE,
      ID,
      DETAIL_DESCRIPTION,
      IMAGE_URLS,
      PROVIDE_SERVICE,
      SUMMATION_DESCRIPTIONS,
    },
  } = useLocation();
  const [imgUrl, setImgUrl] = useState([]);
  const [provider, setProvider] = useState([]);

  useEffect(() => {
    setImgUrl(IMAGE_URLS?.split(","));
    setProvider(PROVIDE_SERVICE?.split(","));
  }, [IMAGE_URLS, PROVIDE_SERVICE]);
  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>{TITLE}</div>
      <div className={styles.sliderContent}>
        <SwiperDetail
          style={{
            "--swiper-navigation-color": "#fff",
          }}
          navigation={true}
          speed={800}
          scrollbar={{
            hide: true,
          }}
          modules={[Autoplay, Scrollbar, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {imgUrl?.map((url) => (
            <SwiperSlide key={uuidv4()}>
              <img
                className={styles.img}
                src={`${process.env.REACT_APP_URL_PRODUCT}/${ID}/${url}`}
                alt=""
              />
            </SwiperSlide>
          ))}
        </SwiperDetail>
      </div>
      <div className={styles.content}>
        <div className={styles.TITLE}>{TITLE}</div>
        <div className={styles.DETAIL_DESCRIPTION}>{DETAIL_DESCRIPTION}</div>
        <div className={styles.summaryContainer}>
          <div className={styles.summary}>
            {Object.entries(JSON.parse(SUMMATION_DESCRIPTIONS)).map(
              (value, i) => (
                <div key={uuidv4()} className={styles.summaryDetail}>
                  {value.map((v, i) =>
                    i === 0 ? (
                      <Summation key={uuidv4()} Icon={v} />
                    ) : (
                      <Summation key={uuidv4()} description={v} />
                    )
                  )}
                </div>
              )
            )}
          </div>
        </div>
        <div className={styles.serviceContainer}>
          <div className={styles.serviceTitle}>SERVICE</div>
          <div className={styles.service}>
            {provider?.map((item) => (
              <div key={uuidv4()} className={styles.item}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.desktopBtn}>
          예약문의
          <div className={styles.icon}>
            <BsTelephoneFill />)
          </div>
          <div>{process.env.REACT_APP_RESERVE_PHONE_NUMBER}</div>
        </div>
        <div className={styles.mbBtn}>
          <a href={`tel:${process.env.REACT_APP_RESERVE_PHONE_NUMBER}`}>
            <Button title={"예약하기"} />
          </a>
        </div>
      </div>
    </div>
  );
}
