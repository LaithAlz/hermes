import React from "react";
import styles from './ChatComponent.module.css';

function ChatInput() {
  return (
    <form className={styles.inputWrapper}>
      <label htmlFor="chatInput" className={styles.visuallyHidden}>Type your message</label>
      <input
        type="text"
        id="chatInput"
        className={styles.chatInput}
        placeholder="Type your message..."
        aria-label="Type your message"
      />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/27c45a32d1164a18dfe1d2831e7802416b6286c1299b381995e7285a3b42457f?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" alt="" className={styles.inputIcon} />
    </form>
  );
}

export default ChatInput;