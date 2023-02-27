import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Notice.module.css";
export default function Notice() {
  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>NOTICE</div>
      <Outlet />
    </div>
  );
}
