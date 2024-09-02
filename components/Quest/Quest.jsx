import styles from "./styles.module.css";
const Quest = ({ title, reward, setToken }) => {
  return (
    <div
      onClick={() => {
        setToken((prevState) => prevState + reward);
      }}
      className={styles.main}
    >
      {title} - {reward}
    </div>
  );
};

export default Quest;
