import React from "react";
import styles from './PostChat.module.css';
import ConversationHeader from './ConversationHeader';
import TopicTags from './TopicTags';
import SummaryNavigation from './SummaryNavigation';
import ConversationSummary from './ConversationSummary';
import ActionButtons from './ActionButtons';
import NotesSection from './NotesSection';

function PostChat() {
  return (
    <main className={styles.postChat}>
      <div className={styles.contentWrapper}>
        <section className={styles.conversationSection}>
          <ConversationHeader />
          <TopicTags />
          <SummaryNavigation />
          <ConversationSummary />
        </section>
        <section className={styles.actionsSection}>
          <ActionButtons />
          <NotesSection />
        </section>
      </div>
    </main>
  );
}

export default PostChat;