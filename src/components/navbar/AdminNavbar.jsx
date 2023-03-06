import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContextProvider";
import { AiOutlineHome } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import styles from "./AdminNavbar.module.css";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  useEffect(() => {
    user.IsAdmin || navigate("/");
  }, [navigate, user.IsAdmin]);
  return (
    <div className={styles.container}>
      <div
        className={styles.logo}
        onClick={() => navigate(process.env.REACT_APP_API_ADMIN_URL)}
      >
        <img
          className={styles.img}
          src={process.env.REACT_APP_API_URL + "/images/logo.png"}
          alt=""
        />
      </div>
      <div className={styles.nav}>
        <ul className={styles.gnb}>
          <li
            className={styles.gnbTitle}
            onClick={() =>
              navigate(process.env.REACT_APP_API_ADMIN_ROOMLIST_URL)
            }
          >
            event
          </li>
          <li
            className={styles.gnbTitle}
            onClick={() =>
              navigate(process.env.REACT_APP_API_ADMIN_SERVICELIST_URL)
            }
          >
            service
          </li>
          <li
            className={styles.gnbTitle}
            onClick={() =>
              navigate(process.env.REACT_APP_API_ADMIN_BOARDLIST_URL)
            }
          >
            notice
          </li>
          <li
            className={styles.gnbTitle}
            onClick={() =>
              navigate(process.env.REACT_APP_API_ADMIN_QNALIST_URL)
            }
          >
            qna
          </li>
        </ul>
      </div>
      <div className={styles.loggin}>
        <div className={styles.profile}>
          <div className={styles.home} onClick={() => navigate("/")}>
            <AiOutlineHome />
          </div>
          {user.IsAdmin && (user?.NAME || user?.USER_EMAIL)}님
        </div>
        <div className={styles.logout} onClick={() => navigate("/logout")}>
          <IoExitOutline />
        </div>
      </div>
    </div>
  );
}
