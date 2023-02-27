import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styles from "./ServiceFirst.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper";
import { v4 as uuidv4 } from "uuid";
import "swiper/css";
import "swiper/css/scrollbar";
import "../ServiceItem/ServiceItem.css";
import Button from "../../../adminpage/ui/Button";
import Summation from "../../../ui/Summation";
import { BsTelephoneFill } from "react-icons/bs";

export default function ServiceFirst() {
  const navigate = useNavigate();
  const [service] = useOutletContext();
  const [first, setFirst] = useState("");
  const [imgUrl, setImgUrl] = useState([]);
  const [provider, setProvider] = useState([]);

  useEffect(() => {
    service.length > 0 && setFirst(service[0]);
  }, [service]);

  useEffect(() => {
    setImgUrl(first?.IMAGE_URLS?.split(","));
    setProvider(first?.PROVIDE_SERVICE?.split(","));
  }, [first?.IMAGE_URLS, first?.PROVIDE_SERVICE]);
  return (
    <div>
      <div className={styles.Title}>
        {service?.map((v, i) => (
          <div key={v?.ID} className={styles.TitleSelected}>
            <div
              className={i === 0 ? styles.select : styles.unSelect}
              onClick={() => navigate(v?.ID, { state: { id: v?.ID } })}
            >
              {v?.TITLE}
            </div>
          </div>
        ))}
      </div>
      <div>
        <div>
          <Swiper
            speed={800}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar, Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
          >
            {imgUrl?.map((url) => (
              <SwiperSlide key={uuidv4()}>
                <img
                  className={styles.img}
                  src={`${process.env.REACT_APP_URL_SERVICE}/${first?.ID}/${url}`}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.content}>
          <div className={styles.TITLE}>{first?.TITLE}</div>
          <div className={styles.DETAIL_DESCRIPTION}>
            {first?.DETAIL_DESCRIPTION}
          </div>
          <div className={styles.summaryContainer}>
            <div className={styles.summary}>
              {first &&
                Object.entries(JSON.parse(first?.SUMMATION_DESCRIPTIONS)).map(
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
    </div>
  );
}
