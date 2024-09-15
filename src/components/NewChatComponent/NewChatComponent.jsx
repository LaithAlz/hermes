import React, { useState } from 'react';
import styles from './NewChatComponent.module.css';
import ChatComponent from '../ChatComponent/ChatComponent';

function NewChatComponent() {

  const languages = [
    { language: "French", shortCode: 'fr', longCode: "fr-FR"},
    { language: "Spanish", shortCode: 'es', longCode: "es-ES" },
    { language: "Chinese", shortCode: 'zh', longCode: "zh-CN" },
    { language: "Arabic", shortCode: 'ar', longCode: "ar-XA" },
    { language: "Russian", shortCode: 'ru', longCode: "ru-RU" },
];

  const [language, setLanguage] = useState(null);

  const handleLanguageSelection = (language) => {
    setLanguage(language);
  }

  if (language) { 
    return <ChatComponent language={language.language} shortCode={language.shortCode} longCode={language.longCode}/>
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.Title}>Select a language you would like to communicate in</h1>
      <div className={styles.buttonList}>
        {languages.map((language) => (
          <button key={language.languageCode} onClick={() => handleLanguageSelection(language)}>
              Let's Talk in {language.language}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NewChatComponent;