import React from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./ReplyItem.module.css";
import { removeReply } from "../../../api/reply/removeReply";
import { removeReplyImg } from "../../../api/reply/removeReplyImg";
import { removeReplyFile } from "../../../api/reply/removeReplyFile";
import { readReplyList } from "../../../api/reply/readReplyList";

export default function ReplyItem({ item, setReply }) {
  const [fileUrl, setFileUrl] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const { ID, WRITER, DESCRIPTION, FILE_URLS, IMAGE_URLS, DATE, REPLY_ID } =
    item;
  useEffect(() => {
    FILE_URLS && setFileUrl(FILE_URLS.split(","));
    IMAGE_URLS && setImgUrl(IMAGE_URLS.split(","));
  }, [FILE_URLS, IMAGE_URLS]);
  const deleteHandler = () => {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      removeReply(item).then(() => {
        removeReplyFile(item)
          .then(() => removeReplyImg(item))
          .then(() => {
            setTimeout(() => {
              readReplyList(ID, setReply);
            }, 800);
          });
      });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.WRITER}>{WRITER}</div>
        <div className={styles.DATE}>
          <div className={styles.DATEDATA}>{DATE}</div>
          <div className={styles.DATEDELETE}>
            <AiOutlineClose onClick={deleteHandler} />
          </div>
        </div>
      </div>
      <div className={styles.DESCRIPTION}>{DESCRIPTION}</div>
      <div className={styles.download}>
        <div className={styles.FILE_URLS}>
          <div className={styles.fileTitle}>
            {fileUrl?.length > 0 && "[첨부된 파일]"}
          </div>
          {fileUrl?.map((file) => (
            <a
              className={styles.file}
              key={uuidv4()}
              type="media_type"
              href={`${process.env.REACT_APP_URL_REPLY}/files/${REPLY_ID}/${file}`}
              download
            >
              {file}
            </a>
          ))}
        </div>
        <div className={styles.IMAGE_URLS}>
          <div className={styles.fileTitle}>
            {imgUrl?.length > 0 && "[첨부된 이미지]"}
          </div>
          <div className={styles.imgContent}>
            {imgUrl?.map((img) => (
              <img
                key={uuidv4()}
                className={styles.img}
                src={`${process.env.REACT_APP_URL_REPLY}/images/${REPLY_ID}/${img}`}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
