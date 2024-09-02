import React from "react";
import styles from "./styles.module.css";

const Avatar = ({ imgUrl }) => {
  return (
    <div className={styles.main}>
      <img className={styles.character} src={imgUrl} alt="character" />
    </div>
  );
};

export default Avatar;
