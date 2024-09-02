import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Avatar from "@/components/Avatar/Avatar";
import { quests as questList } from "../data/quests";
import Quest from "@/components/Quest/Quest";

const Main = () => {
  // TODO: improve slice logic
  const [quests, setQuests] = useState(questList.slice(0, 5));

  const [token, setToken] = useState(0);

  return (
    <div className={styles.main}>
      <div className={styles.characterReward}>
        <div>
          <Avatar imgUrl="https://i.ytimg.com/vi/oiLMkf1COP0/maxresdefault.jpg" />

          <div className={styles.token}>{token} coins</div>
        </div>

        <div className={styles.questWrapper}>
          {quests.map((quest) => (
            <Quest
              title={quest.title}
              reward={quest.reward}
              key={quest.id}
              setToken={setToken}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
