import React, { useState } from "react";
import { useEffect } from "react";
import { readProducts } from "../../../api/products/readProducts";
import styles from "./SummaryCard.module.css";
import CountUp from "react-countup";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { readService } from "../../../api/service/readService";
import { readBoardSumm } from "../../../api/board/readBoardSumm";
import { readQnaSumm } from "../../../api/qna/readQnaSumm";

export default function SummaryCard({ serviceName }) {
  const [serviceContent, setServiceContent] = useState([]);
  const [listLink, seListLink] = useState("/");
  const navigate = useNavigate();
  const cntRef = useRef();
  useEffect(() => {
    switch (serviceName) {
      case "product":
        readProducts(setServiceContent);
        seListLink(process.env.REACT_APP_API_ADMIN_ROOMLIST_URL);
        break;
      case "service":
        readService(setServiceContent);
        seListLink(process.env.REACT_APP_API_ADMIN_SERVICELIST_URL);
        break;
      case "notice":
        readBoardSumm(setServiceContent);
        seListLink(process.env.REACT_APP_API_ADMIN_BOARDLIST_URL);
        break;
      case "qna":
        readQnaSumm(setServiceContent);
        seListLink(process.env.REACT_APP_API_ADMIN_QNALIST_URL);
        break;
      default:
        break;
    }
  }, [serviceName]);
  return (
    <div className={styles.container}>
      <div className={styles.total} ref={cntRef}>
        {serviceContent?.length < 10 ? "0" : ""}
        <CountUp end={serviceContent?.length} duration={0.3} />건
      </div>
      <div className={styles.lists}>
        {serviceContent.map((serviceName) => (
          <div className={styles.list} key={serviceName?.ID}>
            {serviceName?.TITLE}
          </div>
        ))}
      </div>
      <div className={styles.line}></div>
      <div className={styles.viewmore} onClick={() => navigate(listLink)}>
        view more
      </div>
    </div>
  );
}
