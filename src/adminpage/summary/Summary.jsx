import React from "react";
import styles from "./Summary.module.css";
import SummaryCard from "./summaryCard/SummaryCard";

export default function Summary() {
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
    </>
  );
}
