import React from "react";
import { useNavigate } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import styles from "./Navbar.module.css";
import { useState } from "react";
import SideNavbar from "./SideNavbar";
import { useAuthContext } from "../../context/AuthContextProvider";
import { useRef } from "react";
import { useEffect } from "react";

export default function Navbar({ option }) {
  const [navibarStyle, setNavibarStyle] = useState(false);
  const { user } = useAuthContext();
  const naviRef = useRef();
  const { main, sub } = option;
  const [side, setSide] = useState(false);
  const navigate = useNavigate();
  const toggleHandler = () => {
    setSide((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { capture: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const scrollTop = window?.scrollY;
    const navHeight = naviRef?.current?.clientHeight;
    scrollTop > navHeight / 2 && setNavibarStyle(true);
    scrollTop < navHeight / 2 && setNavibarStyle(false);
  };
  return (
    <div
      className={navibarStyle ? styles.containerWhite : styles.container}
      ref={naviRef}
      id="naviContainer"
    >
      <BiMenuAltLeft
        onClick={toggleHandler}
        className={sub ? styles.menuDark : styles.menu}
      />
      <SideNavbar setSide={setSide} side={side} />
      {main && (
        <div className={styles.logo}>
          <div className={styles.logoContainer} onClick={() => navigate("/")}>
            <img
              className={styles.img}
              src={process.env.REACT_APP_API_URL + "/images/logo_white.png"}
              alt=""
            />
          </div>
        </div>
      )}
      {sub && (
        <>
          <div className={styles.mbLogo}>
            <div className={styles.logoContainer} onClick={() => navigate("/")}>
              <img
                className={styles.img}
                src={
                  navibarStyle
                    ? `${process.env.REACT_APP_API_URL}/images/logo_white.png`
                    : `${process.env.REACT_APP_API_URL}/images/logo.png`
                }
                alt=""
              />
            </div>
          </div>
          <div className={styles.navbar}>
            <li
              id="option1"
              className={styles.option1}
              onClick={() => navigate(process.env.REACT_APP_API_SUB_URL)}
            >
              about
            </li>
            <li
              id="option2"
              className={styles.option2}
              onClick={() =>
                navigate(process.env.REACT_APP_API_SUB_OPTION_ONE_URL)
              }
            >
              location
            </li>
            <li
              id="option3"
              className={styles.option3}
              onClick={() =>
                navigate(process.env.REACT_APP_API_SUB_OPTION_TWO_URL)
              }
            >
              room
            </li>
            <li
              id="option4"
              className={styles.option4}
              onClick={() =>
                navigate(process.env.REACT_APP_API_SUB_OPTION_THREE_URL)
              }
            >
              service
            </li>
            <li
              id="option5"
              className={styles.option5}
              onClick={() =>
                navigate(process.env.REACT_APP_API_SUB_OPTION_FOUR_URL)
              }
            >
              notice
            </li>
            <li
              id="option6"
              className={styles.option6}
              onClick={() =>
                navigate(process.env.REACT_APP_API_SUB_OPTION_FIVE_URL)
              }
            >
              qna
            </li>
          </div>
        </>
      )}
      <div className={sub ? styles.logginDark : styles.loggin}>
        {user ? (
          <div className={styles.profile}>
            {user.IsAdmin && (
              <div className={styles.edit} onClick={() => navigate("/admin")}>
                <AiFillEdit />
              </div>
            )}
            {user?.NAME || user?.USER_EMAIL}님
            <div className={styles.logout} onClick={() => navigate("/logout")}>
              <IoExitOutline />
            </div>
          </div>
        ) : (
          <div className={styles.login} onClick={() => navigate("/login")}>
            로그인
          </div>
        )}
      </div>
    </div>
  );
}
