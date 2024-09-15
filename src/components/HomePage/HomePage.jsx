import React from "react";
import styles from './HomePage.module.css';
import Header from './Header';
import ConversationCard from './ConversationCard';

const recentConversations = [
  {
    name: "Jacque Deaux",
    language: "French",
    date: "Sept 8th, 2024",
    tags: ["Memory issues", "Stomach pain", "Annoyed"]
  },
  {
    name: "Maria Orr",
    language: "French",
    date: "Sept 8th, 2024",
    tags: ["Shoulder tear", "Ultrasound", "Pained"]
  },
  {
    name: "Ben Gaines",
    language: "Spanish",
    date: "Sept 8th, 2024",
    tags: ["Memory issues", "Stomach pain", "Annoyed"]
  },
  {
    name: "Jose Alvarado",
    language: "French",
    date: "Sept 8th, 2024",
    tags: ["Shoulder tear", "Ultrasound", "Pained"]
  },
  {
    name: "Tony Parker",
    language: "French",
    date: "Sept 8th, 2024",
    tags: ["Shoulder tear", "Ultrasound", "Pained"]
  }
];

function HomePage() {
  return (
    <main className={styles.homePage}>
      <Header />
      <h1 className={styles.welcomeMessage}>Welcome, Ben</h1>
      <section className={styles.conversationsSection}>
        <h2 className={styles.sectionTitle}>Recent conversations</h2>
        <div className={styles.conversationGrid}>
          {recentConversations.map((conversation, index) => (
            <ConversationCard key={index} {...conversation} />
          ))}
        </div>
        <button className={styles.viewMoreButton}>View more...</button>
      </section>
    </main>
  );
}

export default HomePage;