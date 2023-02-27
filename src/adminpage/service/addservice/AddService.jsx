import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import imageCompression from "browser-image-compression";
import { serviceImgUpload } from "../../../api/service/serviceImgUpload";
import { uploadService } from "../../../api/service/uploadService";
import styles from "./AddService.module.css";
import SummationDescription from "../../../components/SummationDesc/SummationDescription";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import Button from "../../ui/Button";

export default function AddService() {
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState([]);
  const [imgFiles, setImgFiles] = useState([]);
  const [service, setService] = useState([]);
  const [simple, setSimple] = useState({});
  const [summComponent, setSummComponent] = useState([uuidv4()]);
  const [preview, setPreview] = useState([]);
  useEffect(() => {
    const ID = uuidv4();
    setService((service) => ({ ...service, ID: ID }));
  }, []);

  useEffect(() => {
    setService((service) => ({ ...service, IMAGE_URLS: imgUrl }));
  }, [imgUrl]);

  useEffect(() => {
    setService((service) => ({
      ...service,
      SUMMATION_DESCRIPTIONS: JSON.stringify(simple),
    }));
  }, [simple]);

  useEffect(() => {
    setImgUrl([]);
    for (let i = 0; i < preview.length; i++) {
      setImgUrl((prev) => [...prev, `${preview[i]?.name}`]);
    }
    setService((service) => ({
      ...service,
      THUMBNAIL_IMG: `${preview[0]?.name}`,
    }));
  }, [preview, preview.length]);

  const changeHandler = (e) => {
    const { id, value, files } = e.target;
    if (id === "files") {
      const options = {
        maxSizeMb: 2,
        maxWidthOrHeight: 1000,
      };
      for (let i = 0; i < files.length; i++) {
        //이미지의 경로를 지정함.
        setImgUrl((prev) => [...prev, `${files[i]?.name}`]);
        //이미지 압축하고 이미지를 나열함.
        const uuid = uuidv4();
        imageCompression(files[i], options).then((v) => {
          setPreview((prev) => [
            ...prev,
            {
              url: URL.createObjectURL(v),
              name: v.name,
              uuid: uuid,
              lastModified: v.lastModified,
            },
          ]);
          setImgFiles((prev) => [...prev, v]);
        });
      }
      setService((service) => ({
        ...service,
        THUMBNAIL_IMG: `${files[0]?.name}`,
      }));
    } else {
      setService((service) => ({ ...service, [id]: value }));
    }
  };

  const addInfo = () => {
    const id = uuidv4();
    if (summComponent.length <= 3) {
      setSummComponent((prev) => [...prev, id]);
    } else {
      alert("간이정보는 최대 4개까지 가능합니다.");
    }
  };

  const removeInfo = (e) => {
    const { id } = e.target;
    const { value } = document.getElementById(id);
    if (summComponent.length > 1) {
      delete simple[value];
      setSimple(simple);
      setSummComponent((prev) => [...prev].filter((v) => v !== id));
    }
  };

  const removeImg = (e) => {
    const { id } = e.target;
    //console.log(id);
    //setImgUrl();
    setImgFiles((prev) =>
      [...prev].filter((v) => v.lastModified !== Number(id))
    );
    setPreview((prev) =>
      [...prev].filter((v) => v.lastModified !== Number(id))
    );
  };

  const goBack = () => {
    navigate(process.env.REACT_APP_API_ADMIN_URL);
  };

  const fileSubmit = (e) => {
    e.preventDefault();
    //이미지를 업로드하는 함수
    serviceImgUpload(imgFiles, service);
    //경로를 만든 이미지 배열을 해당 services 함수로 넘김
    uploadService(service);
    alert("서비스가 추가되었습니다.");
    navigate(process.env.REACT_APP_API_ADMIN_URL);
  };
  return (
    <>
      <form onSubmit={fileSubmit} id="formdata" className={styles.form}>
        <div className={styles.titleContainer}>
          <div className={styles.titleDescription}>
            <div className={styles.Title}>서비스명</div>
          </div>
          <input
            type={"text"}
            id="TITLE"
            className={styles.titleInput}
            required
            onChange={changeHandler}
            placeholder="제품명을 입력하세요"
          />
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgDescription}>
            <div className={styles.imgTitle}>서비스 이미지</div>
            <div className={styles.imgSub}>
              ※ 첫 이미지가 썸네일 사진입니다.
            </div>
          </div>
          <input
            type={"file"}
            id="files"
            accept="image/*"
            name="files[]"
            multiple={"multiple"}
            onChange={changeHandler}
            className={styles.imgUpload}
          ></input>
          <div className={styles.uploadContainer}>
            <div className={styles.imgList}>
              {preview.map((v) => (
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
          <label className={styles.plusBtn} htmlFor="files">
            <FaPlusSquare />
          </label>
        </div>
        <div className={styles.detailContainer}>
          <div className={styles.detailDescription}>
            <div className={styles.detailTitle}> 상세내용</div>
          </div>
          <textarea
            type={"text"}
            placeholder="제품의 상세내용을 작성해주세요"
            id="DETAIL_DESCRIPTION"
            className={styles.detailInput}
            cols="50"
            required
            onChange={changeHandler}
          />
        </div>
        <div className={styles.serviceContainer}>
          <div className={styles.serviceDescription}>
            <div className={styles.serviceTitle}>제공 서비스</div>
          </div>
          <input
            className={styles.serviceInput}
            type={"text"}
            placeholder="콤마로 구분해주세요. (ex. 욕조, 무선와이파이 ....)"
            id="PROVIDE_SERVICE"
            required
            onChange={changeHandler}
          />
        </div>
        <div className={styles.priceContainer}>
          <div className={styles.priceDescription}>
            <div className={styles.priceTitle}>가격</div>
          </div>
          <input
            className={styles.priceInput}
            type={"text"}
            placeholder="숫자만 작성해주세요."
            id="PRICE"
            required
            onChange={changeHandler}
          />
        </div>
        <div className={styles.summContainer}>
          <div className={styles.summDescription}>
            <div className={styles.summTitle}>요약정보</div>
          </div>
          <div className={styles.summContent}>
            {summComponent.map((id) => (
              <div key={id} className={styles.summContainer}>
                <div key={id} className={styles.summInput}>
                  <SummationDescription id={id} setSimple={setSimple} />
                </div>
                <FaPlusSquare className={styles.summIcon} onClick={addInfo} />
                <FaMinusSquare
                  className={styles.summIcon}
                  style={{ zIndex: "0", position: "relative" }}
                />
                <div
                  id={id}
                  className={styles.summMinus}
                  onClick={removeInfo}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.btn}>
          <Button title="작성하기" type={"submit"} />
          <Button
            title="돌아가기"
            sub={true}
            type={"button"}
            callback={goBack}
          />
        </div>
      </form>
    </>
  );
}
