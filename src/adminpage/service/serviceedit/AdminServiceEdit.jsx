import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./AdminServiceEdit.module.css";
import { v4 as uuidv4 } from "uuid";
import imageCompression from "browser-image-compression";
import { updateService } from "../../../api/service/updateService";
import { serviceImgUpload } from "../../../api/service/serviceImgUpload";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Summation from "../../../ui/Summation";
import SummationDescription from "../../../components/SummationDesc/SummationDescription";
import Button from "../../ui/Button";
import { removeServiceImgOnce } from "../../../api/service/removeServiceImgOnce";

export default function AdminServiceEdit() {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({});
  const [preview, setPreview] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const [simple, setSimple] = useState([]);
  const [imgFiles, setImgFiles] = useState([]);
  const [summComponent, setSummComponent] = useState([uuidv4()]);
  const {
    state: {
      service: {
        ID,
        TITLE,
        DETAIL_DESCRIPTION,
        IMAGE_URLS,
        PROVIDE_SERVICE,
        SUMMATION_DESCRIPTIONS,
        PRICE,
      },
      service,
    },
  } = useLocation();
  useEffect(() => {
    setNewProduct((service) => ({ ...service, IMAGE_URLS: imgUrl }));
  }, [imgUrl]);

  useEffect(() => {
    setNewProduct((service) => ({
      ...service,
      SUMMATION_DESCRIPTIONS: JSON.stringify(simple),
    }));
  }, [simple]);

  useEffect(() => {
    setImgUrl([]);
    for (let i = 0; i < preview.length; i++) {
      setImgUrl((prev) => [...prev, `${preview[i]?.name}`]);
    }
    setNewProduct((service) => ({
      ...service,
      THUMBNAIL_IMG: `${preview[0]?.name}`,
    }));
  }, [preview, preview.length]);

  useEffect(() => {
    const urls = IMAGE_URLS?.split(",");
    setNewProduct(() => service);
    urls?.map((v) =>
      setPreview((prev) => [
        ...prev,
        {
          url: `${process.env.REACT_APP_URL_SERVICE}/${ID}/${v}`,
          uuid: uuidv4(),
          name: v,
        },
      ])
    );
  }, [service, IMAGE_URLS, ID]);

  const changeHandler = (e) => {
    const { id, value, files } = e.target;
    if (id === "files") {
      const options = {
        maxSizeMb: 1,
        maxWidthOrHeight: 800,
      };
      for (let i = 0; i < files.length; i++) {
        //???????????? ????????? ?????????.
        setImgUrl((prev) => [...prev, `${files[i]?.name}`]);
        //????????? ???????????? ???????????? ?????????.
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
      setNewProduct((service) => ({
        ...service,
        THUMBNAIL_IMG: `${files[0]?.name}`,
      }));
    } else {
      setNewProduct((service) => ({ ...service, [id]: value }));
    }
  };
  const addInfo = () => {
    const id = uuidv4();
    if (summComponent.length <= 3) {
      setSummComponent((prev) => [...prev, id]);
    } else {
      alert("??????????????? ?????? 4????????? ???????????????.");
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
    const fileName = e.target.parentElement.id;
    updateService(newProduct).then(() =>
      removeServiceImgOnce({ id: ID, fileName: fileName })
    );
    setImgFiles((prev) =>
      [...prev].filter((v) => v.lastModified !== Number(id))
    );
    setPreview((prev) => [...prev].filter((v) => v.uuid !== id));
  };

  const goBack = () => {
    navigate(process.env.REACT_APP_API_ADMIN_SERVICELIST_URL);
  };
  // ?????? ???????????? ?????? ?????? ??????
  const fileSubmit = (e) => {
    e.preventDefault();
    //???????????? ??????????????? ??????
    serviceImgUpload(imgFiles, newProduct);
    //????????? ?????? ????????? ????????? ?????? products ????????? ??????
    updateService(newProduct);
    alert("????????? ?????????????????????.");
    navigate(process.env.REACT_APP_API_ADMIN_SERVICELIST_URL);
  };
  return (
    <>
      <form onSubmit={fileSubmit} id="formdata" className={styles.form}>
        <div className={styles.titleContainer}>
          <div className={styles.titleDescription}>
            <div className={styles.Title}>?????????</div>
          </div>
          <input
            type={"text"}
            id="TITLE"
            className={styles.titleInput}
            onChange={changeHandler}
            defaultValue={TITLE}
          />
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgDescription}>
            <div className={styles.imgTitle}>?????? ?????????</div>
            <div className={styles.imgSub}>
              ??? ??? ???????????? ????????? ???????????????.
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
              {preview?.map((v) => (
                <div key={v.uuid} id={v.name} className={styles.imgContent}>
                  <div className={styles.imgs}>
                    <img src={v?.url} alt="" className={styles.img} />
                  </div>
                  <AiOutlineCloseSquare id={v.uuid} onClick={removeImg} />
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
            <div className={styles.detailTitle}>?????? ????????????</div>
          </div>
          <textarea
            type={"text"}
            defaultValue={DETAIL_DESCRIPTION}
            id="DETAIL_DESCRIPTION"
            className={styles.detailInput}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.serviceContainer}>
          <div className={styles.serviceDescription}>
            <div className={styles.serviceTitle}>?????? ?????????</div>
          </div>
          <input
            className={styles.serviceInput}
            type={"text"}
            defaultValue={PROVIDE_SERVICE}
            id="PROVIDE_SERVICE"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.priceContainer}>
          <div className={styles.priceDescription}>
            <div className={styles.priceTitle}>??????</div>
          </div>
          <input
            className={styles.priceInput}
            onChange={changeHandler}
            type={"text"}
            defaultValue={PRICE}
            id="PRICE"
          />
        </div>
        <div>
          <div className={styles.saveSummContainer}>
            <div className={styles.summDescription}>
              <div className={styles.summTitle}>????????? ????????????</div>
            </div>
            <div className={styles.summInfo}>
              {Object.entries(JSON.parse(SUMMATION_DESCRIPTIONS)).map(
                (value, i) => (
                  <div key={uuidv4()}>
                    {value.map((v, i) =>
                      i === 0 ? (
                        <Summation key={uuidv4()} Icon={v} />
                      ) : (
                        <Summation key={uuidv4()} description={v} />
                      )
                    )}
                  </div>
                )
              )}
            </div>
          </div>
          <p className={styles.summSub}>
            ??? ?????? ????????? ?????????????????? ????????? ????????? ?????? ??????????????????.
          </p>
          <div className={styles.summContainer}>
            <div className={styles.summDescription}>
              <div className={styles.summTitle}>????????????</div>
            </div>
            <div className={styles.summContent}>
              {summComponent.map((id) => (
                <div key={id} className={styles.summContainer}>
                  <div className={styles.summInput}>
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
        </div>
        <div className={styles.btn}>
          <Button title="????????????" type={"submit"} />
          <Button
            title="????????????"
            sub={true}
            type={"button"}
            callback={goBack}
          />
        </div>
      </form>
    </>
  );
}
