import React from "react";
import styles from "./PostChat.module.css";

const NotesSection: React.FC = () => {
  return (
    <section className={styles.notesSection}>
      <h2 className={styles.notesTitle}>Notes</h2>
      <textarea
        className={styles.notesInput}
        placeholder="Add your notes here..."
        aria-label="Add your notes"
      />
    </section>
  );
};

export default NotesSection;
