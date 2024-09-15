import React from 'react';
import styles from './NewChatComponent.module.css';

function LanguageOption({ text, language }) {
  return (
    <div className={styles.languageOption}>
      <p className={styles.languageText}>{text}</p>
      <img src={`http://b.io/ext_${5 + languageOptions.indexOf({ text, language })}-`} alt={`${language} flag`} className={styles.languageFlag} />
    </div>
  );
}

export default LanguageOption;