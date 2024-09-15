import React from "react";
import styles from "./PostChat.module.css";

const ConversationHeader: React.FC = () => {
  return (
    <header className={styles.conversationHeader}>
      <h1 className={styles.title}>Your conversation with Jacque</h1>
      <div className={styles.metaInfo}>
        <time className={styles.date}>Sept 8th, 2024</time>
        <span className={styles.duration}>18 min</span>
      </div>
    </header>
  );
};

export default ConversationHeader;
