import React from "react";
import styles from './ChatComponent.module.css';

function UserProfile({ name, language, chatHistory }) {
  return (
    <div className={styles.userProfile}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8733defaa65922dd9b2d01e995d90f7d15fdd6b54a80d9028bc3e837b04531df?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" alt="" className={styles.userIcon} />
      <div className={styles.userInfo}>
        <h2 className={styles.userName}>{name}</h2>
        <div className={styles.languageTag}>
          <span>{language}</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ecfdda06ef8827a6b541e7c0546cc844aecfbd65e981453516e0a58e5a00eec?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" alt="" className={styles.arrowIcon} />
        </div>
      </div>
      <ul className={styles.historyList}>
        {chatHistory.map((item, index) => (
          <li key={index} className={styles.historyItem}>
            <time className={styles.historyDate}>{item.date}</time>
            <p className={styles.historyDescription}>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;