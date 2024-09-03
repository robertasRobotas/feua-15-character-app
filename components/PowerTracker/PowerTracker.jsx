import styles from "./styles.module.css";

const PowerTracker = ({ level, title }) => {
  return (
    <div className={styles.main}>
      {title}:{level}
    </div>
  );
};

export default PowerTracker;
