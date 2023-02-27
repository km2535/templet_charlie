import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { readReplyList } from "../../../api/reply/readReplyList";
import ReplyItem from "../replyItem/ReplyItem";
import styles from "./ReplyList.module.css";
export default function ReplyList({ ID, setReply, reply }) {
  useEffect(() => {
    readReplyList(ID, setReply);
  }, [ID, setReply]);
  return (
    <div className={styles.container}>
      {reply.map((item) => (
        <ReplyItem item={item} key={uuidv4()} setReply={setReply} />
      ))}
    </div>
  );
}
