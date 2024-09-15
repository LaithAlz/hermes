import React from "react";
import styles from './ActionButtons.module.css';

function ActionButtons() {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.shareButton}>
        <span>Share conversation</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a82ca3f1ef4e482f3c54eb81871b8bf9c6a8ad7864691e7daab4df021db43ddb?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" alt="" className={styles.icon} />
      </button>
      <button className={styles.discardButton}>Discard conversation</button>
      <button className={styles.saveButton}>Save conversation</button>
    </div>
  );
}

export default ActionButtons;