import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import LandBanner from "./landBanner/LandBanner";
import styles from "./LandingPage.module.css";
import LandIntro from "./landIntro/LandIntro";
import LandProvide from "./landProvide/LandProvide";
import LandService from "./landService/LandService";
export default function LandingPage() {
  return (
    <div id="landingpage" className={styles.container}>
      <Navbar option={{ main: true, sub: false }} />
      <section className={styles.section}>
        <LandBanner />
      </section>
      <section className={styles.section}>
        <LandIntro />
      </section>
      <section>
        <LandProvide />
      </section>
      <section className={styles.section}>
        <LandService />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
