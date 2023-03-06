import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SideNavbar.module.css";
import { SiNaver, SiInstagram } from "react-icons/si";
import { AiOutlineFacebook, AiOutlineClose } from "react-icons/ai";

export default function SideNavbar({ side, setSide, mainPage }) {
  const navigate = useNavigate();
  const naviHandler = (e) => {
    const { id } = e.target;
    switch (id) {
      case "option1":
        navigate("/");
        setSide(false);
        break;
      case "option2":
        navigate(process.env.REACT_APP_API_SUB_URL);
        setSide(false);
        break;
      case "option3":
        navigate(process.env.REACT_APP_API_SUB_OPTION_ONE_URL);
        setSide(false);
        break;
      case "option4":
        navigate(process.env.REACT_APP_API_SUB_OPTION_TWO_URL);
        setSide(false);
        break;
      case "option5":
        navigate(process.env.REACT_APP_API_SUB_OPTION_THREE_URL);
        setSide(false);
        break;
      case "option6":
        navigate(process.env.REACT_APP_API_SUB_OPTION_FOUR_URL);
        setSide(false);
        break;
      case "option7":
        navigate(process.env.REACT_APP_API_SUB_OPTION_FIVE_URL);
        setSide(false);
        break;
      default:
        break;
    }
  };
  const naviClose = () => {
    setSide(false);
  };
  return (
    <div
      className={side ? styles.container : styles.hiddenContainer}
      style={
        mainPage
          ? { backgroundColor: mainPage.BOTTOM_BG_COLOR }
          : { backgroundColor: `#E5CCAF` }
      }
    >
      <div className={styles.close} onClick={naviClose}>
        <AiOutlineClose />
      </div>
      <ul className={styles.list}>
        <li id="option1" className={styles.option1} onClick={naviHandler}>
          홈
        </li>
        <li id="option2" className={styles.option2} onClick={naviHandler}>
          소개
        </li>
        <li id="option3" className={styles.option3} onClick={naviHandler}>
          오시는 길
        </li>
        <li id="option4" className={styles.option4} onClick={naviHandler}>
          이벤트
        </li>
        <li id="option5" className={styles.option5} onClick={naviHandler}>
          교육과정
        </li>
        <li id="option6" className={styles.option5} onClick={naviHandler}>
          공지사항
        </li>
        <li id="option7" className={styles.option5} onClick={naviHandler}>
          비용문의
        </li>
        {/* <li className={styles.options}>
          community
          <div className={styles.snb}>
            <div id="option6" className={styles.option6} onClick={naviHandler}>
              공지사항
            </div>
            <div id="option7" className={styles.option7} onClick={naviHandler}>
              비용문의
            </div>
          </div>
        </li> */}
        <li className={styles.sns}>
          sns
          <div className={styles.snsContainer}>
            <div className={styles.instar}>
              <SiInstagram />
            </div>
            <div className={styles.facebook}>
              <AiOutlineFacebook />
            </div>
            <div className={styles.naver}>
              <SiNaver />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
