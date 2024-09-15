import React from 'react';
import styles from './NewChatComponent.module.css';

function ChatHeader() {
  return (
    <header className={styles.chatHeader}>
      <div className={styles.logoWrapper}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/adb76b6bfa64dc694da655906ef781b515bf8f31b02df0367159e6b93ceb96a9?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" alt="Chat logo" className={styles.chatLogo} />
      </div>
    </header>
  );
}

export default ChatHeader;