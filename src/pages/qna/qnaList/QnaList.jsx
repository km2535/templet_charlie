import React from "react";
import BoardList from "../../../components/board/boardList/BoardList";
import { FiEdit } from "react-icons/fi";
import styles from "./QnaList.module.css";
import { useNavigate } from "react-router-dom";

export default function QnaList() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div>
        <BoardList qna={true} />
      </div>
      <div className={styles.addIcon}>
        <FiEdit
          className={styles.icon}
          onClick={() => navigate(`${process.env.REACT_APP_API_ADD_QNA_URL}`)}
        />
      </div>
    </div>
  );
}
