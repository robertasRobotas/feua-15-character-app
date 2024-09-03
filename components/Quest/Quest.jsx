import styles from "./styles.module.css";
const Quest = ({ id, title, reward, setToken, setQuests, quests }) => {
  return (
    <div
      onClick={() => {
        setToken((prevState) => prevState + reward);
        const index = quests.findIndex((q) => q.id === id);
        quests[index].isCompleted = true;
        setQuests([...quests]);
      }}
      className={styles.main}
    >
      {title} - {reward}
    </div>
  );
};

export default Quest;
