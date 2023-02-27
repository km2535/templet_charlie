import React from "react";
import Banner from "./banner/Banner";
import Intro from "./intro/Intro";
import Section from "./section/Section";
import styles from "./About.module.css";
export default function About() {
  return (
    <div className={styles.container}>
      <Banner />
      <Section />
      <Intro />
    </div>
  );
}
