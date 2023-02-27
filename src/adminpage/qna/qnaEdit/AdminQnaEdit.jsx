import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FaPlusSquare } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./AdminQnaEdit.module.css";
import Button from "../../ui/Button";
import { updateQna } from "../../../api/qna/updateQna";
import { removeQnaImgOnce } from "../../../api/qna/removeQnaImgOnce";
import { removeQnaFileOnce } from "../../../api/qna/removeQnaFileOnce";
import { uploadQnaFile } from "../../../api/qna/uploadQnaFile";

export default function AdminQnaEdit() {
  const navigate = useNavigate();
  const [board, setBoard] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const [imgFiles, setImgFiles] = useState([]);
  const [fileUrl, setFileUrl] = useState([]);
  const [file, setFile] = useState([]);
  const [previewFile, setPreviewFile] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);
  const [description, setDescription] = useState([]);
  const {
    state: {
      boardItem: {
        ID,
        TITLE,
        WRITER,
        READ_CNT,
        DATE,
        DESCRIPTION,
        FILE_URLS,
        IMAGE_URLS,
      },
      boardItem,
    },
  } = useLocation();
  useEffect(() => {
    setBoard(boardItem);
  }, [boardItem]);

  useEffect(() => {
    setBoard((service) => ({
      ...service,
      FILE_URLS: fileUrl,
      IMAGE_URLS: imgUrl,
    }));
  }, [fileUrl, imgUrl]);

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

  useEffect(() => {
    const urls = FILE_URLS ? FILE_URLS?.split(",") : null;
    urls?.map((name) =>
      setPreviewFile((prev) => [
        ...prev,
        {
          url: `${process.env.REACT_APP_URL_QNA}/files/${ID}/${name}`,
          name: name,
          uuid: uuidv4(),
          lastModified: Math.ceil(Math.random() * 10000),
        },
      ])
    );
  }, [ID, FILE_URLS]);

  useEffect(() => {
    const urls = IMAGE_URLS ? IMAGE_URLS?.split(",") : null;
    urls?.map((name) =>
      setPreviewImg((prev) => [
        ...prev,
        {
          url: `${process.env.REACT_APP_URL_QNA}/images/${ID}/${name}`,
          name: name,
          uuid: uuidv4(),
          lastModified: Math.ceil(Math.random() * 10000),
        },
      ])
    );
  }, [ID, IMAGE_URLS]);

  useEffect(() => {
    setDescription(DESCRIPTION && DESCRIPTION.replaceAll("<br/>", "\n"));
  }, [DESCRIPTION]);

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
    } else if (id === "DESCRIPTION") {
      setBoard((prev) => ({
        ...prev,
        [id]: value?.replaceAll("\n", "<br/>"),
      }));
    } else {
      setBoard((prev) => ({ ...prev, [id]: value }));
    }
  };
  const removeFile = (e) => {
    const { id } = e.target;
    const fileName = e.target.previousElementSibling.innerHTML;
    setFile((prev) => [...prev].filter((v) => v.lastModified !== Number(id)));
    setPreviewFile((prev) =>
      [...prev].filter((v) => v.lastModified !== Number(id))
    );
    updateQna(board).then(() =>
      removeQnaFileOnce({ id: ID, fileName: fileName })
    );
  };

  const removeImg = (e) => {
    const { id } = e.target;
    const fileName = e.target.parentElement.id;
    setFile((prev) => [...prev].filter((v) => v.lastModified !== Number(id)));
    setPreviewImg((prev) =>
      [...prev].filter((v) => v.lastModified !== Number(id))
    );
    updateQna(board).then(() =>
      removeQnaImgOnce({ id: ID, fileName: fileName })
    );
  };
  const goBack = () => {
    navigate(-1);
  };
  const boardSubmit = (e) => {
    e.preventDefault();
    uploadQnaFile(file, imgFiles, board);
    updateQna(board);
    alert("게시글이 수정되었습니다.");
    navigate(-1);
  };
  return (
    <form onSubmit={boardSubmit} id="formdata" className={styles.form}>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.theadTr}>
              <th className={styles.thTitle}>제 목</th>
              <th className={styles.thWriter}>작성자</th>
              <th className={styles.thReadCnt}>조회수</th>
              <th className={styles.thDate}>작성일</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr className={styles.tbodyTr}>
              <td className={styles.tdTitle}>
                <input
                  type={"text"}
                  id="TITLE"
                  defaultValue={TITLE}
                  className={styles.titleInput}
                  onChange={changeHandler}
                />
              </td>
              <td className={styles.tdWriter}>{WRITER}</td>
              <td className={styles.tdReadCnt}>{READ_CNT}</td>
              <td className={styles.tdDate}>{DATE}</td>
            </tr>
            <tr className={styles.downloadTr}>
              <td colSpan={4}>
                <div className={styles.downloadFile}>
                  <div className={styles.downloadTitle}>첨부파일</div>
                  <input
                    className={styles.inputFile}
                    type={"file"}
                    id="files"
                    accept=".pdf, .hwp, .show, .xlsx, .xlsm,.xlsb, .xls,  .doc, .hwpx, .ppt, .pptm, .pptx, .txt"
                    name="files[]"
                    multiple={"multiple"}
                    onChange={changeHandler}
                  />
                  <div className={styles.uploadFileContainer}>
                    <div className={styles.fileList}>
                      {previewFile?.map((v) => (
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
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={4}>
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
                      {previewImg?.map((v) => (
                        <div
                          key={v.uuid}
                          id={v.name}
                          className={styles.imgContent}
                        >
                          <div className={styles.imgs}>
                            <img src={v?.url} alt="" className={styles.img} />
                          </div>
                          <AiOutlineCloseSquare
                            className={styles.removeIcon}
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
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={4} className={styles.description}>
                <textarea
                  type={"text"}
                  defaultValue={description}
                  id="DESCRIPTION"
                  className={styles.detailInput}
                  rows="10"
                  maxLength="500"
                  onChange={changeHandler}
                />
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className={styles.btnContainer}>
          <div className={styles.btn}>
            <Button title="수정하기" type={"submit"} />
          </div>

          <div>
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
