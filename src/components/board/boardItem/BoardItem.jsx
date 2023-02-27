import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import crypto from "crypto-js";
import { checkPassword } from "../../../api/qna/readQnaDetail";
import styles from "./BoardItem.module.css";
import Button from "../../../adminpage/ui/Button";
import { useAuthContext } from "../../../context/AuthContextProvider";

export default function BoardItem({
  qna,
  notice,
  Item,
  index,
  page,
  totalPage,
}) {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { DATE, READ_CNT, TITLE, WRITER, ID } = Item;
  const [boardNum, setBoardNum] = useState(totalPage);
  const [pw, setPw] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [passInput, setPassInput] = useState(false);
  const [userEncycrpto, setUserEncycrpto] = useState(WRITER);

  const clickHandler = (e) => {
    const { id } = e.target;
    notice &&
      navigate(`${process.env.REACT_APP_API_BOARD_DETAIL_URL}/${id}`, {
        state: { Item },
      });
    qna && setPassInput(true);
    qna &&
      checkPassword({ ID: id }).then((pw) =>
        setPw(crypto.AES.decrypt(pw, ID).toString(crypto.enc.Utf8))
      );
    qna &&
      user?.IsAdmin &&
      navigate(`${process.env.REACT_APP_API_QNA_DETAIL_URL}`, {
        state: { Item },
      });
  };
  const inputPass = (e) => {
    setInputPw(e.target.value);
  };
  const checkPass = () => {
    if (inputPw && pw === inputPw) {
      navigate(`${process.env.REACT_APP_API_QNA_DETAIL_URL}`, {
        state: { Item },
      });
    } else {
      alert("패스워드가 일치하지 않습니다.");
    }
    setPassInput(false);
  };
  const close = () => {
    setPassInput(false);
  };
  useEffect(() => {
    const boardNumber = totalPage - (page - 1) * 10 - index;
    if (boardNumber > 0) {
      setBoardNum(boardNumber);
    }
  }, [totalPage, index, page]);
  useEffect(() => {
    const userId = WRITER.slice(0, WRITER.indexOf("@"));
    if (!notice) {
      setUserEncycrpto(
        WRITER.includes("@")
          ? WRITER.slice(0, WRITER.indexOf("@"))
              .slice(-userId.length, 2)
              .padEnd(userId.length, "*")
          : WRITER.slice(-WRITER.length, 2).padEnd(WRITER.length, "*")
      );
    }
  }, [WRITER, notice]);

  return (
    <>
      {passInput && (
        <tr>
          <td>
            <div className={styles.pwBox}>
              <div className={styles.pwTitle}>비밀번호를 입력하세요</div>
              <input
                className={styles.pwInput}
                type="password"
                onChange={inputPass}
              />
              <div className={styles.btn}>
                <Button title={"확인"} type={"button"} callback={checkPass} />
                <Button
                  title={"닫기"}
                  type={"button"}
                  sub={true}
                  callback={close}
                />
              </div>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )}
      <tr className={styles.tbodyTr}>
        <td className={styles.tdNum}>{boardNum}</td>
        <td className={styles.tdTitle} id={ID} onClick={clickHandler}>
          {TITLE}
        </td>
        <td className={styles.tdWriter}>{userEncycrpto}</td>
        <td className={styles.tdReadCnt}>{READ_CNT}</td>
        <td className={styles.tdDate}>{DATE}</td>
      </tr>
    </>
  );
}
