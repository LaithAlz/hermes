import React from "react";
import styles from "./PostChat.module.css";

const SummarySelector: React.FC = () => {
  return (
    <nav className={styles.summarySelector}>
      <button className={styles.summaryOption}>Brief summary</button>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2afea5c722ee1beec79dc3a570c27889ec94c07c2c800c3b60a4374b9a099c89?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
        alt=""
        className={styles.selectorIcon}
      />
      <button className={styles.summaryOption}>Detailed Summary</button>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2afea5c722ee1beec79dc3a570c27889ec94c07c2c800c3b60a4374b9a099c89?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
        alt=""
        className={styles.selectorIcon}
      />
      <button className={styles.summaryOption}>Transcript</button>
    </nav>
  );
};

export default SummarySelector;
