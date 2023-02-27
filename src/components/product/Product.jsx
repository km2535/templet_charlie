import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { readProducts } from "../../api/products/readProducts";
import { removeProduct } from "../../api/products/removeProduct";
import { removeProductImg } from "../../api/products/removeProductImg";

export default function Product({ product, isAdmin, setProducts }) {
  const navigate = useNavigate();
  const { TITLE, ID } = product;
  const removeHandler = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      removeProduct(product)
        .then(() => removeProductImg(product))
        .finally(() => readProducts(setProducts));
    }
  };
  return (
    <div>
      <div
        onClick={() => {
          navigate(process.env.REACT_APP_API_ADMIN_ROOMEDIT_URL + `/${ID}`, {
            state: { product },
          });
        }}
      >
        {TITLE}
        {isAdmin && <AiOutlineCloseSquare onClick={removeHandler} />}
      </div>
    </div>
  );
}
