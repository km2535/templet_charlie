import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthContext } from "../../../context/AuthContextProvider";
import { v4 as uuidv4 } from "uuid";
import { uploadReplyFile } from "../../../api/reply/uploadReplyFile";
import { uploadRely } from "../../../api/reply/uploadRely";
import styles from "./AddReply.module.css";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FaPlusSquare } from "react-icons/fa";
import Button from "../../../adminpage/ui/Button";
import { readReplyList } from "../../../api/reply/readReplyList";

export default function AddReply({ ID, setNewReply }) {
  const { user } = useAuthContext();
  const [reply, setReply] = useState([]);
  const [REPLY_ID, setREPLY_ID] = useState(uuidv4());
  const [imgUrl, setImgUrl] = useState([]);
  const [imgFiles, setImgFiles] = useState([]);
  const [fileUrl, setFileUrl] = useState([]);
  const [file, setFile] = useState([]);
  const [previewFile, setPreviewFile] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);

  useEffect(() => {
    setReply((prev) => ({
      ...prev,
      ID: ID,
      REPLY_ID: REPLY_ID,
      WRITER: user?.NAME || user?.USER_EMAIL || "",
    }));
  }, [ID, REPLY_ID, user]);
  useEffect(() => {
    setReply((prev) => ({ ...prev, FILE_URLS: fileUrl }));
  }, [fileUrl]);
  useEffect(() => {
    setReply((prev) => ({ ...prev, IMAGE_URLS: imgUrl }));
  }, [imgUrl]);
  useEffect(() => {
    setFileUrl([]);
    for (let i = 0; i < previewFile.length; i++) {
      setFileUrl((prev) => [...prev, `${previewFile[i]?.name}`]);
    }
  }, [previewFile, previewFile.length]);

  useEffect(() => {
    setImgUrl([]);
    for (let i = 0; i < previewImg.length; i++) {
      setImgUrl((prev) => [...prev, `${previewImg[i]?.name}`]);
    }
  }, [previewImg, previewImg.length]);
  const changeHandler = (e) => {
    const { id, value, files } = e.target;
    if (id === "files") {
      for (let i = 0; i < files.length; i++) {
        if (!files[i].type.includes("image")) {
          setFileUrl((prev) => [...prev, `${files[i]?.name}`]);
          const uuid = uuidv4();
          setPreviewFile((prev) => [
            ...prev,
            {
              url: URL.createObjectURL(files[i]),
              name: files[i].name,
              uuid: uuid,
              lastModified: files[i].lastModified,
            },
          ]);
          setFile((prev) => [...prev, files[i]]);
        }
      }
    } else if (id === "images") {
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.includes("image")) {
          setImgUrl((prev) => [...prev, `${files[i]?.name}`]);
          const uuid = uuidv4();
          setPreviewImg((prev) => [
            ...prev,
            {
              url: URL.createObjectURL(files[i]),
              name: files[i].name,
              uuid: uuid,
              lastModified: files[i].lastModified,
            },
          ]);
          setImgFiles((prev) => [...prev, files[i]]);
        }
      }
    } else {
      setReply((product) => ({ ...product, [id]: value }));
    }
  };
  const removeFile = (e) => {
    const { id } = e.target;
    setFile((prev) => [...prev].filter((v) => v.lastModified !== Number(id)));
    setPreviewFile((prev) =>
      [...prev].filter((v) => v.lastModified !== Number(id))
    );
  };
  const removeImg = (e) => {
    const { id } = e.target;
    setImgFiles((prev) =>
      [...prev].filter((v) => v.lastModified !== Number(id))
    );
    setPreviewImg((prev) =>
      [...prev].filter((v) => v.lastModified !== Number(id))
    );
  };
  const boardSubmit = (e) => {
    e.preventDefault();
    const text = window.document.getElementById("DESCRIPTION");
    const writer = window.document.getElementById("WRITER");
    uploadReplyFile(file, imgFiles, reply);
    uploadRely(reply).then(() => {
      setTimeout(() => {
        readReplyList(ID, setNewReply);
      }, 800);
    });
    alert("댓글이 추가되었습니다.");
    text.value = "";
    user?.NAME || user?.USER_EMAIL || (writer.value = "");
    setREPLY_ID(uuidv4());
    setPreviewFile([]);
    setPreviewImg([]);
    setImgFiles([]);
    setFile([]);
    setImgFiles([]);
  };
  return (
    <form onSubmit={boardSubmit} id="formdata" className={styles.form}>
      <div className={styles.container}>
        <input
          type="text"
          id={"WRITER"}
          defaultValue={user?.NAME || user?.USER_EMAIL || ""}
          placeholder={"사용자 이름을 입력해주세요"}
          onChange={changeHandler}
          required
        />
        <div className={styles.detail}>
          <textarea
            type="text"
            placeholder="댓글을 작성해주세요"
            id="DESCRIPTION"
            className={styles.detailInput}
            cols="50"
            required
            onChange={changeHandler}
          />
          <div className={styles.btn}>
            <Button title="작성하기" type={"submit"} />
          </div>
        </div>
        <div className={styles.downloadFile}>
          <div className={styles.downloadTitle}>파일 추가하기</div>
          <input
            className={styles.inputFile}
            type={"file"}
            id="files"
            accept=".pdf, .hwp, .show, .xlsx, .xlsm,.xlsb, .xls,  .doc, .hwpx, .ppt, .pptm, .pptx, .txt"
            name="files[]"
            multiple={"multiple"}
            onChange={changeHandler}
          />
          <div className={styles.uploadContainer}>
            <div className={styles.fileList}>
              {previewFile.map((v) => (
                <div key={v.uuid} className={styles.fileContent}>
                  <div className={styles.files}>{v?.name}</div>
                  <AiOutlineCloseSquare
                    className={styles.close}
                    id={v.lastModified}
                    onClick={removeFile}
                  />
                </div>
              ))}
            </div>
          </div>
          <label className={styles.plusBtn} htmlFor="files">
            <FaPlusSquare />
          </label>
        </div>
        <div className={styles.downloadFile}>
          <div className={styles.downloadTitle}>이미지 추가하기</div>
          <label className={styles.plusBtn} htmlFor="images">
            <FaPlusSquare />
          </label>
          <input
            className={styles.inputFile}
            type={"file"}
            id="images"
            name="files[]"
            accept="image/*"
            multiple={"multiple"}
            onChange={changeHandler}
          />
          <div className={styles.uploadContainer}>
            <div className={styles.imgList}>
              {previewImg.map((v) => (
                <div key={v.uuid} className={styles.imgContent}>
                  <div className={styles.imgs}>
                    <img src={v?.url} alt="" className={styles.img} />
                  </div>
                  <AiOutlineCloseSquare
                    className={styles.close}
                    id={v.lastModified}
                    onClick={removeImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
