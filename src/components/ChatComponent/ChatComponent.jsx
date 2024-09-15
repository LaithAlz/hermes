import React from "react";
import styles from './ChatComponent.module.css';
import UserProfile from './UserProfile';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const chatHistory = [
  {
    date: "Sept 8th, 2024",
    description: "Tummy troubles"
  },
  {
    date: "Sept 2nd, 2024",
    description: "Tummy troubles"
  },
  {
    date: "Aug 14th, 2024",
    description: "Ankle injury"
  }
];

function ChatComponent() {
  return (
    <main className={styles.chatContainer}>
      <div className={styles.chatWrapper}>
        <aside className={styles.sidebar}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5db8042574203c03fa40661834c9645d4355a7b36255c2af281ddb99a0d844a7?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" alt="" className={styles.logoIcon} />
          <UserProfile
            name="Jacque Deaux"
            language="French"
            chatHistory={chatHistory}
          />
          <button className={styles.takeNotes}>Take notes</button>
        </aside>
        <section className={styles.messageContainer}>
          <ChatMessage
            sender="Ben"
            avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/73dfb82884ef0eb8e11b0def5d344b75baad08c3751792abb2cb9a2372801b48?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
            messages={[
              "Hello, my name is Ben! How are you?",
              "Bonjour, je m'appelle Ben ! Comment allez-vous ?"
            ]}
            isUser={true}
          />
          <ChatMessage
            sender="Jacque"
            avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/c49eeeaaf6cc6b5ef4a604912be1a0b855c524c888f53f748731b756783dfdbd?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
            messages={[
              "Salut Ben ! C'est Jacque, on a déjà discuté plusieurs fois.",
              "Hi Ben! It's Jacque, we've chatted many times already."
            ]}
            isUser={false}
          />
          <ChatMessage
            sender="Ben"
            avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/e85008a2fac7d94cd8a0067f801ab9b252ffcd0b9e066b0a0a1cb77be0217182?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
            messages={[
              "Oh right! I see our chat history. I'm sorry I forgot.",
              "Ah oui, c'est vrai ! Je vois ton historique de discussion. Je suis désolé, j'ai oublié."
            ]}
            isUser={true}
          />
          <ChatInput />
        </section>
      </div>
      <button className={styles.stopButton}>Stop</button>
    </main>
  );
}

export default ChatComponent;