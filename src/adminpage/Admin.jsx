import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import AdminNavbar from "../components/navbar/AdminNavbar";
import styles from "./Admin.module.css";

export default function Admin() {
  return (
    <div>
      <AdminNavbar />
      <div className={styles.mainTitle}>ADMIN</div>
      <Outlet />
      <Footer />
    </div>
  );
}
