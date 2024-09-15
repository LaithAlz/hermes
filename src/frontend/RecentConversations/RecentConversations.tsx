import React from "react";
import ConversationCard from "./ConversationCard";
import styles from "./RecentConversations.module.css";

const conversationData = [
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2259c066e0ff02bc98bd4249915836ffd7f863100322c50f1e073fea59d8414a?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2",
    name: "Jacque Deaux",
    language: "French",
    date: "Sept 8th, 2024",
    tags: ["Memory issues", "Stomach pain", "Annoyed"],
  },
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2259c066e0ff02bc98bd4249915836ffd7f863100322c50f1e073fea59d8414a?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2",
    name: "Maria Orr",
    language: "French",
    date: "Sept 8th, 2024",
    tags: ["Shoulder tear", "Ultrasound", "Pained"],
  },
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2259c066e0ff02bc98bd4249915836ffd7f863100322c50f1e073fea59d8414a?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2",
    name: "Ben Gaines",
    language: "Spanish",
    date: "Sept 8th, 2024",
    tags: ["Memory issues", "Stomach pain", "Annoyed"],
  },
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2259c066e0ff02bc98bd4249915836ffd7f863100322c50f1e073fea59d8414a?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2",
    name: "Jose Alvarado",
    language: "French",
    date: "Sept 8th, 2024",
    tags: ["Shoulder tear", "Ultrasound", "Pained"],
  },
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2259c066e0ff02bc98bd4249915836ffd7f863100322c50f1e073fea59d8414a?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2",
    name: "Tony Parker",
    language: "French",
    date: "Sept 8th, 2024",
    tags: ["Shoulder tear", "Ultrasound", "Pained"],
  },
];

const RecentConversations: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Recent conversations</h2>
      <div className={styles.conversationList}>
        {conversationData.map((conversation, index) => (
          <ConversationCard key={index} {...conversation} />
        ))}
      </div>
      <p className={styles.viewMore}>View more...</p>
    </section>
  );
};

export default RecentConversations;
