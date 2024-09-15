import React from "react";
import RecentConversations from "../RecentConversations/RecentConversations";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <button className={styles.newChatButton}>
            <span className={styles.newChatText}>New chat</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d36977be4edc02e00c1c9e3b600a58e54257338aedc0434b7ae415a271a48130?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
              alt=""
              className={styles.newChatIcon}
            />
          </button>
          <div className={styles.searchBar}>
            <span className={styles.searchText}>Search</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/099407de9d65c0ebe04e6d7f79cfb3eb5f14d60c7fac98a2679e78c2bace5da9?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
              alt=""
              className={styles.searchIcon}
            />
          </div>
          <time className={styles.dateDisplay}>
            Sept 8th <br /> 2024
          </time>
        </header>
        <h1 className={styles.welcomeMessage}>Welcome, Ben</h1>
        <RecentConversations />
      </div>
    </main>
  );
};

export default HomePage;
