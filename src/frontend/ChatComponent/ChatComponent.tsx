import React from "react";
import styles from "./ChatComponent.module.css";
import UserProfile from "./UserProfile";
import ChatMessage from "./ChatMessage.tsx";
import ChatInput from "./ChatInput";

interface ChatComponentProps {
  userData: {
    name: string;
    language: string;
    appointments: Array<{
      date: string;
      description: string;
    }>;
  };
  messages: Array<{
    sender: string;
    content: {
      original: string;
      translated: string;
    };
    avatar: string;
  }>;
}

const ChatComponent: React.FC<ChatComponentProps> = ({
  userData,
  messages,
}) => {
  return (
    <main className={styles.chatContainer}>
      <div className={styles.chatWrapper}>
        <aside className={styles.sidebar}>
          <UserProfile userData={userData} />
          <button className={styles.takeNotes}>Take notes</button>
        </aside>
        <section className={styles.messageArea}>
          {messages.map((message, index) => (
            <ChatMessage key={index} {...message} />
          ))}
          <ChatInput />
        </section>
      </div>
      <button className={styles.stopButton}>Stop</button>
    </main>
  );
};

export default ChatComponent;
