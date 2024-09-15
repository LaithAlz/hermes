import React from "react";
import styles from "./ConversationCard.module.css";

interface ConversationCardProps {
  avatar: string;
  name: string;
  language: string;
  date: string;
  tags: string[];
}

const ConversationCard: React.FC<ConversationCardProps> = ({
  avatar,
  name,
  language,
  date,
  tags,
}) => {
  return (
    <div className={styles.card}>
      <img
        loading="lazy"
        src={avatar}
        alt={`${name}'s avatar`}
        className={styles.avatar}
      />
      <div className={styles.infoContainer}>
        <h3 className={styles.name}>{name}</h3>
        <span
          className={`${styles.language} ${language === "French" ? styles.languageBlue : styles.languageYellow}`}
        >
          {language}
        </span>
      </div>
      <time className={styles.date}>{date}</time>
      <div className={styles.tagList}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ConversationCard;
