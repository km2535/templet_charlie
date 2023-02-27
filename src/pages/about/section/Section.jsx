import React from "react";
import styles from "./Section.module.css";

export default function Section() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.mainTitle}>MIN HOTEL</div>
        <div className={styles.subTitle}>
          <div>여기에 여러분의 고객에게</div>
          <div>회사에 대해서 알리고 싶은 글들을</div>
          <div>적으시면 고객들에게 더욱 깊은 감동을 전해주실 수 있습니다..</div>
        </div>
      </div>
      <div className={styles.imgContent}>
        <div className={styles.content}>
          <div
            className={styles.img}
            style={{
              backgroundImage: `url(${process.env.REACT_APP_API_URL}/images/love.jpg)`,
            }}
          >
            <div className={styles.cover}></div>
            <div className={styles.description}>
              <div className={styles.number}>1</div>
              <div className={styles.descTitle}>사랑</div>
              <div className={styles.descDetail}>
                고객을 사랑하는 마음으로 모시겠습니다.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div
            className={styles.img}
            style={{
              backgroundImage: `url(${process.env.REACT_APP_API_URL}/images/dedicated.jpg)`,
            }}
          >
            <div className={styles.cover}></div>
            <div className={styles.description}>
              <div className={styles.number}>2</div>
              <div className={styles.descTitle}>헌신</div>
              <div className={styles.descDetail}>
                고객들에게는 항상 헌신하여 모시겠습니다.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div
            className={styles.img}
            style={{
              backgroundImage: `url(${process.env.REACT_APP_API_URL}/images/experiance.jpg)`,
            }}
          >
            <div className={styles.cover}></div>
            <div className={styles.description}>
              <div className={styles.number}>3</div>
              <div className={styles.descTitle}>경험</div>
              <div className={styles.descDetail}>
                고객분들께 특별한 경험을 제공해 드리겠습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bg}></div>
    </div>
  );
}
