import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { productCount } from "../../api/products/productCount";
import styles from "./Room.module.css";
import RoomList from "./roomlist/RoomList";

export default function Room() {
  const [totalCnt, setTotalCnt] = useState(0);
  const [currentPage, setCurrenPage] = useState(1);
  useEffect(() => {
    productCount(setTotalCnt);
  }, []);

  const handlePageClick = (e) => {
    setCurrenPage(e.selected + 1);
  };
  return (
    <div className={styles.container}>
      <RoomList currentPage={currentPage} />
      <div className={styles.paginationContainer}>
        <ReactPaginate
          breakLabel={""}
          previousLabel={"<"}
          nextLabel={">"}
          onPageChange={handlePageClick}
          pageCount={Math.ceil(totalCnt / 4)}
          pageRangeDisplayed={10}
          marginPagesDisplayed={10}
          containerClassName={styles.pagination}
          activeClassName={styles.current}
          pageClassName={styles.item}
          previousClassName={styles.prev}
          nextClassName={styles.next}
        />
      </div>
    </div>
  );
}
