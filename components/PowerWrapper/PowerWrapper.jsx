import PowerTracker from "../PowerTracker/PowerTracker";
import styles from "./styles.module.css";

const PowerWrapper = ({ speed, jump, fly }) => {
  return (
    <div className={styles.powerWrapper}>
      <PowerTracker title="Speed" level={speed} />
      <PowerTracker title="Jump" level={jump} />
      <PowerTracker title="Fly" level={fly} />
    </div>
  );
};

export default PowerWrapper;
