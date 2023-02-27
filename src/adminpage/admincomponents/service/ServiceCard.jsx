import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Summation from "../../../ui/Summation";
import styles from "./ServiceCard.module.css";
import { readService } from "../../../api/service/readService";
import { removeService } from "../../../api/service/removeService";
import { removeServiceImg } from "../../../api/service/removeServiceImg";

export default function ServiceCard({ service, isAdmin, setService }) {
  const navigate = useNavigate();
  const {
    TITLE,
    ID,
    THUMBNAIL_IMG,
    SUMMATION_DESCRIPTIONS,
    DETAIL_DESCRIPTION,
  } = service;
  const removeHandler = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      removeService(service)
        .then(() => removeServiceImg(service))
        .finally(() => readService(setService));
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.imgContent}
        onClick={() => {
          navigate(process.env.REACT_APP_API_ADMIN_SERVICEDIT_URL + `/${ID}`, {
            state: { service },
          });
        }}
      >
        <img
          className={styles.img}
          src={`${process.env.REACT_APP_URL_SERVICE}/${ID}/${THUMBNAIL_IMG}`}
          alt=""
        />
      </div>
      <div className={styles.section}>
        <div className={styles.title}>{TITLE}</div>
        <div className={styles.content}>{DETAIL_DESCRIPTION}</div>
      </div>
      <div className={styles.remove}>
        {isAdmin && (
          <AiFillCloseSquare
            className={styles.removeIcon}
            onClick={removeHandler}
          />
        )}
      </div>
      <div className={styles.summary}>
        {Object.entries(JSON.parse(SUMMATION_DESCRIPTIONS)).map((value, i) => (
          <div key={uuidv4()} className={styles.summaryDetail}>
            {value.map((v, i) =>
              i === 0 ? (
                <Summation key={uuidv4()} Icon={v} />
              ) : (
                <Summation key={uuidv4()} description={v} />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
