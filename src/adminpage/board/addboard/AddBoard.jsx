import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddBoard.module.css";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FaPlusSquare } from "react-icons/fa";
import { useEffect } from "react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { uploadBoard } from "../../../api/board/uploadBoard";
import { uploadBoardFile } from "../../../api/board/uploadBoardFile";

export default function AddBoard() {
  const navigate = useNavigate();
  const [board, setBoard] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const [imgFiles, setImgFiles] = useState([]);
  const [fileUrl, setFileUrl] = useState([]);
  const [file, setFile] = useState([]);
  const [previewFile, setPreviewFile] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);
  useEffect(() => {
    const ID = uuidv4();
    setBoard((prev) => ({ ...prev, ID: ID, WRITER: "관리자" }));
  }, []);
  useEffect(() => {
    setBoard((prev) => ({ ...prev, FILE_URLS: fileUrl }));
  }, [fileUrl]);
  useEffect(() => {
    setBoard((prev) => ({ ...prev, IMAGE_URLS: imgUrl }));
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
  const goBack = () => {
    navigate(-1);
  };
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
      setBoard((product) => ({ ...product, [id]: value }));
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
    uploadBoardFile(file, imgFiles, board);
    uploadBoard(board);
    alert("게시글이 추가되었습니다.");
    navigate(-1);
  };
  return (
    <form onSubmit={boardSubmit} id="formdata" className={styles.form}>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.theadTr}>
              <th className={styles.thTitle}>제목</th>
              <th className={styles.thWriter}>작성자</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr className={styles.tbodyTr}>
              <td className={styles.tdTitle}>
                <div className={styles.titleContainer}>
                  <input
                    type={"text"}
                    id="TITLE"
                    className={styles.titleInput}
                    required
                    onChange={changeHandler}
                    placeholder="제목을 입력하세요"
                  />
                </div>
              </td>
              <td className={styles.tdWriter}>관리자</td>
            </tr>
            <tr className={styles.downloadTr}>
              <td colSpan={2}>
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
                            className={styles.removeIcon}
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
              </td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div>
                  <div className={styles.downloadFile}>
                    <div className={styles.downloadTitle}>이미지 추가하기</div>
                    <label className={styles.plusBtn} htmlFor="images">
                      <FaPlusSquare />
                    </label>
                  </div>
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
                            id={v.lastModified}
                            onClick={removeImg}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={2} className={styles.description}>
                <div>
                  <textarea
                    type={"text"}
                    placeholder="제품의 상세내용을 작성해주세요"
                    id="DESCRIPTION"
                    className={styles.detailInput}
                    cols="50"
                    required
                    onChange={changeHandler}
                  />
                </div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className={styles.btnContainer}>
          <div className={styles.btn}>
            <Button title="작성하기" type={"submit"} />
            <Button
              title="돌아가기"
              sub={true}
              type={"button"}
              callback={goBack}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
