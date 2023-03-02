import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import styles from "./Home.module.css";
import Footer from "../../components/footer/Footer";
import { readMainPage } from "../../api/mainPage/readMainPage";
export default function Home() {
  const [mainPage, setMainPage] = useState(null);
  useEffect(() => {
    readMainPage(setMainPage);
  }, []);
  return (
    <>
      <Navbar mainPage={mainPage} option={{ main: false, sub: true }} />
      <div className={styles.margin}></div>
      <div className={styles.content}>
        <Outlet />
      </div>
      <footer className={styles.container}>
        <Footer />
      </footer>
    </>
  );
}
