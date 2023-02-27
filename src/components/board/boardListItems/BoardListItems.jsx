import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { readBoards } from "../../../api/board/readBoards";
import { readQnas } from "../../../api/qna/readQnas";
import BoardItem from "../boardItem/BoardItem";

export default function BoardListItems({ qna, notice, page, totalPage }) {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    const startPage = (page - 1) * 10;
    const endPage = 10;
    notice && readBoards(startPage, endPage, setBoards);
    qna && readQnas(startPage, endPage, setBoards);
  }, [notice, page, qna]);
  return (
    <>
      {boards?.map((Item, index) => (
        <BoardItem
          qna={qna}
          notice={notice}
          key={Item?.ID}
          Item={Item}
          index={index}
          page={page}
          totalPage={totalPage}
        />
      ))}
    </>
  );
}
