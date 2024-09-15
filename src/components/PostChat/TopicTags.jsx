import React from "react";
import styles from './TopicTags.module.css';

function TopicTags() {
  const topics = [
    { label: "Memory issues", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/474c0807ef814d7147c53c203b10afd9ea3414ab6ab73820f9956ab2f13783b5?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" },
    { label: "Stomach pain", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/474c0807ef814d7147c53c203b10afd9ea3414ab6ab73820f9956ab2f13783b5?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" },
    { label: "Annoyed", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/474c0807ef814d7147c53c203b10afd9ea3414ab6ab73820f9956ab2f13783b5?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" },
  ];

  return (
    <div className={styles.topicContainer}>
      {topics.map((topic, index) => (
        <span key={index} className={styles.topicTag}>
          <span>{topic.label}</span>
          <img src={topic.icon} alt="" className={styles.icon} />
        </span>
      ))}
      <button className={styles.addTopicButton}>
        <span>Add topic</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c329d45c9bb27d48c4d502b4385b8205f0fb974c39440c8f7119f2283f28c25a?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" alt="" className={styles.icon} />
      </button>
    </div>
  );
}

export default TopicTags;