import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { readProducts } from "../../../api/products/readProducts";
import ProductCard from "../../admincomponents/product/ProductCard";
import { FiEdit } from "react-icons/fi";
import styles from "./AdminRoomList.module.css";
export default function AdminRoomList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    readProducts(setProducts);
  }, []);
  return (
    <>
      <div className={styles.roomContainer}>
        <div className={styles.title}>상품 목록</div>
        <div className={styles.products}>
          {products.map((product) => (
            <ProductCard
              key={product?.ID}
              setProducts={setProducts}
              product={product}
              isAdmin={true}
            />
          ))}
        </div>
      </div>
      <div className={styles.addIcon}>
        <FiEdit
          className={styles.icon}
          onClick={() => navigate(process.env.REACT_APP_API_ADMIN_ADDROOM_URL)}
        />
      </div>
    </>
  );
}
