import React, { useEffect, useRef, useState } from "react";
import styles from "./LandText.module.css";
export default function LandText({ text, position }) {
  const refContainer = useRef();
  const refTxt = useRef();
  let [count] = useState(0);

  useEffect(() => {
    const eleContainer = refContainer.current;
    const eleTxt = refTxt.current;
    const cloneEle = eleTxt.cloneNode(true);
    eleContainer.appendChild(cloneEle);
    const moveTxt = (count) => {
      if (count > eleContainer.scrollWidth / 2) {
        eleContainer.style.transform = `translateY(${position}px) translateX(0px)`;
        count = 0;
      }
      eleContainer.style.transform = `translateY(${position}px) translateX(-${count}px)`;
      return count;
    };
    const animate = () => {
      count++;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      count = moveTxt(count);
      window.requestAnimationFrame(animate);
    };
    const scrollHandler = () => {
      count += 5;
    };
    window.addEventListener("scroll", scrollHandler);
    animate();
  }, [count, text]);
  return (
    <div className={styles.wrapper}>
      <div ref={refContainer} className={styles.container}>
        <div className={styles.text} ref={refTxt}>
          {text}
        </div>
      </div>
    </div>
  );
}
