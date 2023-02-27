import React from "react";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import BoardList from "../../../components/board/boardList/BoardList";
import styles from "./AdminQnaList.module.css";

export default function AdminQnaList() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <BoardList qna={true} />
        <div className={styles.addIcon}>
          <FiEdit
            className={styles.icon}
            onClick={() => navigate(process.env.REACT_APP_API_ADMIN_ADDQNA_URL)}
          />
        </div>
      </div>
    </div>
  );
}
