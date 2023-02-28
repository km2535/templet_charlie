import React, { useEffect, useState } from "react";
import { readMainPage } from "../../api/mainPage/readMainPage";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import LandBanner from "./landBanner/LandBanner";
import styles from "./LandingPage.module.css";
import LandIntro from "./landIntro/LandIntro";
import LandProvide from "./landProvide/LandProvide";
import LandService from "./landService/LandService";
export default function LandingPage() {
  const [mainPage, setMainPage] = useState("");
  useEffect(() => {
    readMainPage(setMainPage);
  }, []);
  return (
    <div id="landingpage" className={styles.container}>
      <Navbar mainPage={mainPage} option={{ main: true, sub: false }} />
      <section className={styles.section}>
        <LandBanner mainPage={mainPage} />
      </section>
      <section className={styles.section}>
        <LandIntro />
      </section>
      <section>
        <LandProvide mainPage={mainPage} />
      </section>
      <section className={styles.section}>
        <LandService mainPage={mainPage} />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
