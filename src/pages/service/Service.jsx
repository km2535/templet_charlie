import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { readService } from "../../api/service/readService";
import styles from "./Service.module.css";
export default function Service() {
  const [service, setService] = useState([]);
  useEffect(() => {
    readService(setService);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>CLASS</div>
      <Outlet context={[service]} />
    </div>
  );
}
