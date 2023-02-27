import React from "react";
import styles from "./Qna.module.css";
import { Outlet } from "react-router-dom";

export default function Qna() {
  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>Q & A</div>
      <Outlet />
    </div>
  );
}
