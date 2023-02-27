import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { readService } from "../../../api/service/readService";
import ServiceCard from "../../admincomponents/service/ServiceCard";
import styles from "./AdminServiceList.module.css";
export default function AdminServiceList() {
  const [service, setService] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    readService(setService);
  }, []);
  return (
    <>
      <div className={styles.roomContainer}>
        <div className={styles.title}>서비스 목록</div>
        <div className={styles.service}>
          {service.map((service) => (
            <ServiceCard
              key={service?.ID}
              setService={setService}
              service={service}
              isAdmin={true}
            />
          ))}
        </div>
      </div>
      <div className={styles.addIcon}>
        <FiEdit
          className={styles.icon}
          onClick={() =>
            navigate(process.env.REACT_APP_API_ADMIN_ADDSERVICE_URL)
          }
        />
      </div>
    </>
  );
}
