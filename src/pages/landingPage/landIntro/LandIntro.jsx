import React from "react";
import styles from "./LandIntro.module.css";
import { v4 as uuidv4 } from "uuid";
import { Swiper as MainSwiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper";
import { useEffect } from "react";
import { readProducts } from "../../../api/products/readProducts";
import { useState } from "react";
import "swiper/css/effect-fade";
import Summation from "../../../ui/Summation";
import { useNavigate } from "react-router-dom";

export default function LandIntro() {
  const navegate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    readProducts(setProducts);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.sliderContent}>
        <MainSwiper
          style={{
            "--swiper-navigation-color": "#2F4858",
          }}
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          modules={[Autoplay, Navigation, EffectFade]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          speed={800}
          loop={true}
        >
          {products?.map((room) => (
            <SwiperSlide key={uuidv4()}>
              <div className={styles.sliderContent}>
                <img
                  className={styles.img}
                  src={`${process.env.REACT_APP_URL_PRODUCT}/${room?.ID}/${room?.THUMBNAIL_IMG}`}
                  alt=""
                />
                <div className={styles.sliderDescription}>
                  <div className={styles.TITLE}>{room?.TITLE}</div>
                  <div className={styles.DETAIL_DESCRIPTION}>
                    {room?.DETAIL_DESCRIPTION}
                  </div>
                  <div className={styles.summaryContainer}>
                    <div className={styles.summary}>
                      {Object.entries(
                        JSON.parse(room?.SUMMATION_DESCRIPTIONS)
                      ).map((value, i) => (
                        <div key={uuidv4()} className={styles.summaryDetail}>
                          {value.map((v, i) =>
                            i === 0 ? (
                              <Summation key={uuidv4()} Icon={v} />
                            ) : (
                              <Summation key={uuidv4()} description={v} />
                            )
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className={styles.linked}
                    onClick={() => {
                      navegate(
                        `${process.env.REACT_APP_API_SUB_OPTION_TWO_URL}/${room?.ID}`,
                        { state: room }
                      );
                    }}
                  >
                    <div>MORE VIEW</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </MainSwiper>
      </div>
    </div>
  );
}
