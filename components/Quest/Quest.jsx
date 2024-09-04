import { useEffect } from "react";
import styles from "./styles.module.css";
const Quest = ({ id, title, reward, onClick }) => {
  useEffect(() => {
    console.log(title);

    return () => {
      console.log(title + " DONE");
    };
  }, []);

  return (
    <div
      onClick={() => {
        onClick(id, reward);
      }}
      className={styles.main}
    >
      {title} - {reward}
    </div>
  );
};

export default Quest;
