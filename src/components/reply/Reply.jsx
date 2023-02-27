import React from "react";
import { useState } from "react";
import AddReply from "./addReply/AddReply";
import ReplyList from "./replyList/ReplyList";

export default function Reply({ ID }) {
  const [newReply, setNewReply] = useState([]);
  return (
    <>
      <AddReply ID={ID} setNewReply={setNewReply} />
      <ReplyList ID={ID} reply={newReply} setReply={setNewReply} />
    </>
  );
}
