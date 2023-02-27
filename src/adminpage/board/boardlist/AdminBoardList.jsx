import React from "react";
import BoardList from "../../../components/board/boardList/BoardList";
import styles from "./AdminBoardList.module.css";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function AdminBoardList() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <BoardList notice={true} />
        <div className={styles.addIcon}>
          <FiEdit
            className={styles.icon}
            onClick={() =>
              navigate(process.env.REACT_APP_API_ADMIN_ADDBOARD_URL)
            }
          />
        </div>
      </div>
    </div>
  );
}
