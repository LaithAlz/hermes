import React from "react";
import styles from './ConversationCard.module.css';

function ConversationCard({ name, language, date, tags }) {
  return (
    <article className={styles.card}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2259c066e0ff02bc98bd4249915836ffd7f863100322c50f1e073fea59d8414a?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" alt="" className={styles.avatar} />
      <div className={styles.cardContent}>
        <h3 className={styles.name}>{name}</h3>
        <span className={`${styles.language} ${styles[language.toLowerCase()]}`}>{language}</span>
      </div>
      <time className={styles.date}>{date}</time>
      <div className={styles.tagContainer}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default ConversationCard;