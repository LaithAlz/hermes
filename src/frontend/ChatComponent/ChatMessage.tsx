import React from "react";
import styles from "./ChatComponent.module.css";

interface ChatMessageProps {
  sender: string;
  content: {
    original: string;
    translated: string;
  };
  avatar: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  sender,
  content,
  avatar,
}) => {
  const isUser = sender === "Jacque";
  const messageClass = isUser ? styles.userMessage : styles.botMessage;

  return (
    <article className={`${styles.messageContainer} ${messageClass}`}>
      <img src={avatar} alt={`${sender}'s avatar`} className={styles.avatar} />
      <div className={styles.messageContent}>
        <p className={styles.originalText}>{content.original}</p>
        <p className={styles.translatedText}>{content.translated}</p>
      </div>
      <div className={styles.senderName}>{sender}</div>
    </article>
  );
};

export default ChatMessage;
