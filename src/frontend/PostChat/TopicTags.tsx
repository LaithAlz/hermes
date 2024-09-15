import React from "react";
import styles from "./PostChat.module.css";

interface TopicTagProps {
  text: string;
  isAddTopic?: boolean;
}

const TopicTag: React.FC<TopicTagProps> = ({ text, isAddTopic = false }) => {
  const tagClass = isAddTopic ? styles.addTopicTag : styles.topicTag;
  return (
    <div className={tagClass}>
      <span>{text}</span>
      {!isAddTopic && (
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/474c0807ef814d7147c53c203b10afd9ea3414ab6ab73820f9956ab2f13783b5?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
          alt=""
          className={styles.tagIcon}
        />
      )}
      {isAddTopic && (
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c329d45c9bb27d48c4d502b4385b8205f0fb974c39440c8f7119f2283f28c25a?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
          alt=""
          className={styles.tagIcon}
        />
      )}
    </div>
  );
};

const TopicTags: React.FC = () => {
  const topics = ["Memory issues", "Stomach pain", "Annoyed"];

  return (
    <div className={styles.topicTagsContainer}>
      {topics.map((topic, index) => (
        <TopicTag key={index} text={topic} />
      ))}
      <TopicTag text="Add topic" isAddTopic />
    </div>
  );
};

export default TopicTags;
