import React from "react";
import styles from "./MapGoogle.module.css";

export default function MapGoogle() {
  return (
    <div className={styles.container}>
      <iframe
        className={styles.map}
        title="googleMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5321.417516397041!2d126.95792094850262!3d37.52834345043918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca204ab3d0cdd%3A0x2eca5fcad9572105!2z7Jqp7IKw7Jet!5e0!3m2!1sko!2skr!4v1676321297538!5m2!1sko!2skr"
        allowFullScreen=""
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
