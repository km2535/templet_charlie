import React, { useEffect, useState } from "react";
import styles from "./RoomItem.module.css";
import { v4 as uuidv4 } from "uuid";
import Summation from "../../../ui/Summation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "./RoomItem.css";
import { useNavigate } from "react-router-dom";

export default function RoomItem({ room }) {
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState([]);
  const { ID, TITLE, DETAIL_DESCRIPTION, IMAGE_URLS, SUMMATION_DESCRIPTIONS } =
    room;
  useEffect(() => {
    setImgUrl(IMAGE_URLS?.split(","));
  }, [IMAGE_URLS]);
  return (
    <div className={styles.container}>
      <div
        className={styles.sliderContent}
        onClick={() => navigate(`${ID}`, { state: room })}
      >
        <Swiper
          pagination={true}
          speed={800}
          scrollbar={{
            hide: true,
          }}
          modules={[Autoplay, Pagination]}
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
        </Swiper>
      </div>
      <div className={styles.contentCard}>
        <div className={styles.title}>{TITLE}</div>
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
      <div className={styles.title}>{TITLE}</div>
      <div className={styles.description}>{DETAIL_DESCRIPTION}</div>
    </div>
  );
}
