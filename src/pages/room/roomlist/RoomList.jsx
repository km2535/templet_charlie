import React, { useEffect, useState } from "react";
import { readProductList } from "../../../api/products/readProdcutList";
import RoomItem from "../roomItem/RoomItem";
import styles from "./RoomList.module.css";

export default function RoomList({ currentPage }) {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const startPage = (currentPage - 1) * 4;
    const endPage = 4;
    readProductList(startPage, endPage, setRooms);
  }, [currentPage]);
  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>EVENT</div>
      <div className={styles.subTitle}>
        {/* <div className={styles.txt1}>
          우리 민호텔에는 다양하고 특별한 방들로
        </div> */}
        {/* <div className={styles.txt2}>고객만족을 실현하고 있습니다.</div> */}
      </div>
      <div className={styles.roomCard}>
        {rooms?.map((room) => (
          <RoomItem room={room} key={room?.ID} />
        ))}
      </div>
    </div>
  );
}
