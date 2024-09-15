import React from "react";
import styles from "./PostChat.module.css";
import ConversationHeader from "./ConversationHeader";
import TopicTags from "./TopicTags";
import SummarySelector from "./SummarySelector";
import ConversationActions from "./ConversationActions";
import NotesSection from "./NotesSection";

const PostChat: React.FC = () => {
  return (
    <main className={styles.postChat}>
      <div className={styles.contentWrapper}>
        <section className={styles.conversationSection}>
          <ConversationHeader />
          <TopicTags />
          <SummarySelector />
          <p className={styles.summaryText}>
            In a lengthy discussion with Jacque, it became clear that he was
            struggling with memory lapses, often losing track of what he had
            just said or asked. <br />
            Several times, he repeated the same questions or seemed frustrated
            when he couldn't recall parts of the conversation. <br />
            Midway through, Jacque mentioned that he had been dealing with
            persistent tummy pain, which he suggested might be contributing to
            his difficulty concentrating. <br />
            His irritability grew as the discussion progressed, especially when
            he had trouble keeping up or when his discomfort seemed to
            intensify. <br />
            Despite efforts to stay on track, his frustration with both his
            memory and the pain was palpable.
          </p>
        </section>
        <aside className={styles.actionSection}>
          <ConversationActions />
          <NotesSection />
        </aside>
      </div>
    </main>
  );
};

export default PostChat;
