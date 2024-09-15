import React from 'react';
import styles from './NewChatComponent.module.css';

function LanguageSelector() {
  return (
    <div className={styles.languageSelector}>
      <label htmlFor="language" className={styles.visuallyHidden}>Select language</label>
      <select id="language" className={styles.selectLanguage}>
        <option>Select language</option>
      </select>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/64a02f4ba3f6c77e176b0f5287d3914073ebe3c629a042fdf2686f378ac9662f?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" alt="" className={styles.dropdownArrow} />
    </div>
  );
}

export default LanguageSelector;