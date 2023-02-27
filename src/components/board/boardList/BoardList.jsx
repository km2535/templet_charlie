import React from "react";
import styles from "./BoardList.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { readBoardCnt } from "../../../api/board/readBoardCnt";
import ReactPaginate from "react-paginate";
import BoardListItems from "../boardListItems/BoardListItems";
import { readQnaCnt } from "../../../api/qna/readQnaCnt";

export default function BoardList({ qna, notice }) {
  const [totalCnt, setTotalCnt] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  //여기서 게시판의 데이터를 읽는다.
  useEffect(() => {
    notice && readBoardCnt(setTotalCnt);
    qna && readQnaCnt(setTotalCnt);
  }, [notice, qna]);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1);
  };
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.theadTr}>
            <th>번호</th>
            <th className={styles.thTitle}>제목</th>
            <th className={styles.thWriter}>작성자</th>
            <th className={styles.thReadCnt}>조회수</th>
            <th className={styles.thDate}>작성일</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <BoardListItems
            qna={qna}
            notice={notice}
            page={currentPage}
            totalPage={totalCnt}
          />
        </tbody>
      </table>
      <ReactPaginate
        breakLabel={""}
        previousLabel={"<"}
        nextLabel={">"}
        onPageChange={handlePageClick}
        pageCount={Math.ceil(totalCnt / 10)}
        pageRangeDisplayed={10}
        marginPagesDisplayed={10}
        containerClassName={styles.pagination}
        activeClassName={styles.current}
        pageClassName={styles.item}
        previousClassName={styles.prev}
        nextClassName={styles.next}
      />
    </div>
  );
}
