import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import styles from "./Summary.module.css";
import SummaryCard from "./summaryCard/SummaryCard";

export default function Summary() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.products}>
          제품 보기
          <SummaryCard serviceName={"product"} />
        </div>
        <div className={styles.service}>
          서비스보기
          <SummaryCard serviceName={"service"} />
        </div>
        <div className={styles.notice}>
          공지사항
          <SummaryCard serviceName={"notice"} />
        </div>
        <div className={styles.qna}>
          QnA
          <SummaryCard serviceName={"qna"} />
        </div>
      </div>
      <div className={styles.btn}>
        <Button
          title={"디자인 변경"}
          callback={() => navigate(process.env.REACT_APP_API_ADMIN_DESIGN_URL)}
        />
      </div>
    </>
  );
}
