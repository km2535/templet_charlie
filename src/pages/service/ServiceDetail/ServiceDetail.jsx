import React from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import ServiceItem from "../ServiceItem/ServiceItem";
import styles from "./ServiceDetail.module.css";
export default function ServiceDetail() {
  const navigate = useNavigate();
  const [service] = useOutletContext();
  const {
    state: { id },
  } = useLocation();
  return (
    <div>
      <div className={styles.Title}>
        {service?.map((v) => (
          <div key={v?.ID} className={styles.TitleSelected}>
            <div
              onClick={() =>
                navigate(`/minhotel/service/${v?.ID}`, { state: { id: v?.ID } })
              }
              className={v.ID === id ? styles.select : styles.unSelect}
            >
              {v?.TITLE}
            </div>
          </div>
        ))}
      </div>
      {service?.map((v) => (
        <div key={v?.ID}>{v?.ID === id && <ServiceItem service={v} />}</div>
      ))}
    </div>
  );
}
