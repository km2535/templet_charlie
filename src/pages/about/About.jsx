import React, { useEffect, useState } from "react";
import Banner from "./banner/Banner";
import Intro from "./intro/Intro";
import Section from "./section/Section";
import styles from "./About.module.css";
import { readSubPage } from "../../api/subPage/readSubPage";
export default function About() {
  const [subPage, setSubPage] = useState();
  useEffect(() => {
    readSubPage(setSubPage);
  }, []);
  return (
    <div className={styles.container}>
      <Banner subPage={subPage} />
      <Section subPage={subPage} />
      <Intro subPage={subPage} />
    </div>
  );
}
