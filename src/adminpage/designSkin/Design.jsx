import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Design.module.css";

export default function Design() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div onClick={() => navigate("")} className={styles.title}>
          Home
        </div>
        <div onClick={() => navigate("subAbout")} className={styles.title}>
          About
        </div>
      </div>
      <Outlet />
    </div>
  );
}
