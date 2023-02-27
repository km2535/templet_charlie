import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { readProducts } from "../../../api/products/readProducts";
import { removeProduct } from "../../../api/products/removeProduct";
import { removeProductImg } from "../../../api/products/removeProductImg";
import { v4 as uuidv4 } from "uuid";
import Summation from "../../../ui/Summation";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, isAdmin, setProducts }) {
  const navigate = useNavigate();
  const {
    TITLE,
    ID,
    THUMBNAIL_IMG,
    SUMMATION_DESCRIPTIONS,
    DETAIL_DESCRIPTION,
  } = product;
  const removeHandler = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      removeProduct(product)
        .then(() => removeProductImg(product))
        .finally(() => readProducts(setProducts));
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.imgContent}
        onClick={() => {
          navigate(process.env.REACT_APP_API_ADMIN_ROOMEDIT_URL + `/${ID}`, {
            state: { product },
          });
        }}
      >
        <img
          className={styles.img}
          src={`${process.env.REACT_APP_URL_PRODUCT}/${ID}/${THUMBNAIL_IMG}`}
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
