import React from "react";
import BoardList from "../../../components/board/boardList/BoardList";

export default function NoticeList() {
  return (
    <div>
      <div>
        <BoardList notice={true} />
      </div>
    </div>
  );
}
