import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import AdminNavbar from "../components/navbar/AdminNavbar";
import styles from "./Admin.module.css";
export default function Admin() {
  // 여기에 경로를 보호하는 로직을 추가해야함.
  return (
    <div>
      <AdminNavbar />
      <div className={styles.mainTitle}>ADMIN</div>
      <Outlet />
      <Footer />
    </div>
  );
}
