import React from "react";
import styles from './ChatComponent.module.css';

function ChatMessage({ sender, avatar, messages, isUser }) {
  const messageClass = isUser ? styles.userMessage : styles.botMessage;

  return (
    <article className={`${styles.messageWrapper} ${messageClass}`}>
      <div className={styles.avatarWrapper}>
        <img src={avatar} alt={`${sender}'s avatar`} className={styles.avatar} />
        <span className={styles.senderName}>{sender}</span>
      </div>
      <div className={styles.messageContent}>
        {messages.map((message, index) => (
          <p key={index} className={styles.messageText}>{message}</p>
        ))}
      </div>
      {isUser && <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/333ae07a4b3724aef5c69ef5ee3640a9fd62501cf929236a23a958dc179cdd3b?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" alt="" className={styles.userIcon} />}
    </article>
  );
}

export default ChatMessage;