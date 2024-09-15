import React from "react";
import styles from './ConversationHeader.module.css';

function ConversationHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Your conversation with Jacque</h1>
      <div className={styles.metadata}>
        <time className={styles.date} dateTime="2024-09-08">Sept 8th, 2024</time>
        <span className={styles.duration}>18 min</span>
      </div>
    </header>
  );
}

export default ConversationHeader;