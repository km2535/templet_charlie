import React from "react";
import MapGoogle from "./map/MapGoogle";
import styles from "./Location.module.css";
import { FaBus, FaSubway } from "react-icons/fa";
export default function Location() {
  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>LOCATION</div>
      <MapGoogle />
      <div className={styles.info}>
        <div className={styles.info}>
          <div className={styles.bus}>
            버스
            <FaBus />
          </div>
          <div className={styles.subInfo}>
            00역에서 하차 후 00번 버스 00정류장에서 하차 00m 직진, 00빌딩
          </div>
        </div>
        <div className={styles.subwayInfo}>
          <div className={styles.subway}>
            지하철
            <FaSubway />
          </div>
          <div className={styles.subInfo}>
            00역에서 하차 후 00번 버스 00정류장에서 하차 00m 직진, 00빌딩
          </div>
        </div>
      </div>
    </div>
  );
}
