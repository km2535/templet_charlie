import React, { useEffect, useState } from "react";
import Summation from "../../../ui/Summation";
import styles from "./ServiceItem.module.css";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "./ServiceItem.css";
import Button from "../../../adminpage/ui/Button";
import { BsTelephoneFill } from "react-icons/bs";

export default function ServiceItem({ service }) {
  const [imgUrl, setImgUrl] = useState([]);
  const [provider, setProvider] = useState([]);
  const {
    ID,
    TITLE,
    DETAIL_DESCRIPTION,
    IMAGE_URLS,
    PROVIDE_SERVICE,
    SUMMATION_DESCRIPTIONS,
    PRICE,
  } = service;
  useEffect(() => {
    setImgUrl(IMAGE_URLS?.split(","));
    setProvider(PROVIDE_SERVICE?.split(","));
  }, [IMAGE_URLS, PROVIDE_SERVICE]);

  return (
    <div>
      <div>
        <Swiper
          speed={800}
          scrollbar={{
            hide: true,
          }}
          modules={[Autoplay, Scrollbar]}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {imgUrl?.map((url) => (
            <SwiperSlide key={uuidv4()}>
              <img
                className={styles.img}
                src={`${process.env.REACT_APP_URL_SERVICE}/${ID}/${url}`}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.content}>
        <div className={styles.TITLE}>{TITLE}</div>
        <div className={styles.PRICE}>{PRICE}</div>
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
