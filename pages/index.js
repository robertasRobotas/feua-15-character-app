import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Avatar from "@/components/Avatar/Avatar";
import { quests as questList } from "../data/quests";
import Quest from "@/components/Quest/Quest";
import PowerWrapper from "@/components/PowerWrapper/PowerWrapper";

const Main = () => {
  const [quests, setQuests] = useState(questList);
  const [token, setToken] = useState(0);

  const [speed, setSpeed] = useState(1);
  const [jump, setJump] = useState(1);
  const [fly, setFly] = useState(1);

  const [isError, setError] = useState(false);

  const displayQuests = quests
    .filter((quest) => quest.isCompleted === false)
    .slice(0, 5);

  const buyPower = (powerTitle, sum) => {
    if (token < sum) {
      console.log("Not enough coins");
      setError(true);
      return;
    }

    setToken((prevState) => prevState - sum);

    if (powerTitle === "SPEED") {
      setSpeed((pevState) => pevState + 1);
    }

    if (powerTitle === "JUMP") {
      setJump((pevState) => pevState + 1);
    }

    if (powerTitle === "FLY") {
      setFly((pevState) => pevState + 1);
    }
  };

  const validateError = () => {
    if (token >= speed * 100 || token >= jump * 150 || token >= fly * 200) {
      setError(false);
    }
  };

  const onClickQuest = (id, reward) => {
    const index = quests.findIndex((q) => q.id === id);
    quests[index].isCompleted = true;
    setQuests([...quests]);

    setToken((prevState) => prevState + reward);
  };

  // useEffect(() => {
  //   console.log("some job");
  // }, []);

  // useEffect(() => {
  //   console.log("Speed value changed or initiolized");
  // }, [speed]);

  // useEffect(() => {
  //   console.log("Speed or Jump or Fly value changed or initiolized");
  // }, [speed, jump, fly]);

  useEffect(() => {
    validateError();
  }, [token]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.characterReward}>
          <div>
            <Avatar imgUrl="https://i.ytimg.com/vi/oiLMkf1COP0/maxresdefault.jpg" />

            <div className={styles.token}>{token} coins</div>

            <PowerWrapper speed={speed} jump={jump} fly={fly} />
          </div>

          <div className={styles.righSideWrapper}>
            <div className={styles.questWrapper}>
              {displayQuests.map((quest) => (
                <Quest
                  id={quest.id}
                  title={quest.title}
                  reward={quest.reward}
                  key={quest.id}
                  onClick={(id, reward) => onClickQuest(id, reward)}
                />
              ))}
            </div>

            <button
              className={styles.buyBtn}
              onClick={() => buyPower("SPEED", speed * 100)}
            >
              Increase speed - {speed * 100}
            </button>

            <button
              className={styles.buyBtn}
              onClick={() => buyPower("JUMP", jump * 150)}
            >
              Increase jump - {jump * 150}
            </button>

            <button
              className={styles.buyBtn}
              onClick={() => buyPower("FLY", fly * 200)}
            >
              Increase fly - {fly * 200}
            </button>
          </div>
        </div>
      </div>
      {isError && <h3 style={{ color: "#96001e" }}>Not enough coins</h3>}
    </>
  );
};

export default Main;
