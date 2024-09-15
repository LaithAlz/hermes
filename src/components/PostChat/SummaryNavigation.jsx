import React from "react";
import styles from './SummaryNavigation.module.css';

function SummaryNavigation() {
  return (
    <nav className={styles.navigation}>
      <button className={styles.navButton}>
        Brief summary
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2afea5c722ee1beec79dc3a570c27889ec94c07c2c800c3b60a4374b9a099c89?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" alt="" className={styles.icon} />
      </button>
      <button className={styles.navButton}>
        Detailed Summary
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2afea5c722ee1beec79dc3a570c27889ec94c07c2c800c3b60a4374b9a099c89?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" alt="" className={styles.icon} />
      </button>
      <button className={styles.navButton}>Transcript</button>
    </nav>
  );
}

export default SummaryNavigation;