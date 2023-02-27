import React, { useEffect, useState } from "react";
import { readService } from "../../../api/service/readService";
import styles from "./LandService.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { Autoplay, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import "./LandService.css";
import "swiper/css";
import "swiper/css/navigation";
import LandText from "../landText/LandText";
export default function LandService() {
  const navegate = useNavigate();
  const [services, setServices] = useState([]);
  useEffect(() => {
    readService(setServices);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
          }}
          spaceBetween={50}
          navigation={true}
          grabCursor={true}
          slidesPerView={services.length >= 3 ? 3 : 1}
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={800}
          rewind={true}
        >
          {services?.map((service) => (
            <SwiperSlide key={uuidv4()}>
              <div className={styles.sliderContent}>
                <img
                  onClick={() => {
                    navegate(
                      `${process.env.REACT_APP_API_SUB_OPTION_THREE_URL}`
                    );
                  }}
                  className={styles.img}
                  src={`${process.env.REACT_APP_URL_SERVICE}/${service?.ID}/${service?.THUMBNAIL_IMG}`}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <LandText text={"PACKAGE"} position={-200} />
      <div className={styles.bg}></div>
    </div>
  );
}
