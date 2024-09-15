import React from "react";
import styles from './NoteSection.module.css';

function NotesSection() {
  return (
    <section className={styles.notesSection}>
      <h2 className={styles.notesTitle}>Notes</h2>
      <textarea
        className={styles.notesInput}
        placeholder="Add your notes here..."
        aria-label="Add your notes"
      ></textarea>
    </section>
  );
}

export default NotesSection;