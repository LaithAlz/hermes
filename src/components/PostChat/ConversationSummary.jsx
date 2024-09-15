import React from "react";
import styles from './ConversationSummary.module.css';

function ConversationSummary() {
  return (
    <article className={styles.summary}>
      <p>In a lengthy discussion with Jacque, it became clear that he was struggling with memory lapses, often losing track of what he had just said or asked.</p>
      <p>Several times, he repeated the same questions or seemed frustrated when he couldn't recall parts of the conversation.</p>
      <p>Midway through, Jacque mentioned that he had been dealing with persistent tummy pain, which he suggested might be contributing to his difficulty concentrating.</p>
      <p>His irritability grew as the discussion progressed, especially when he had trouble keeping up or when his discomfort seemed to intensify.</p>
      <p>Despite efforts to stay on track, his frustration with both his memory and the pain was palpable.</p>
    </article>
  );
}

export default ConversationSummary;