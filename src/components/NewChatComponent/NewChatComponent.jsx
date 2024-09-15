import React from 'react';
import styles from './NewChatComponent.module.css';
import LanguageOption from './LanguageOption';
import LanguageSelector from './LanguageSelector';
import ChatHeader from './ChatHeader';

const languageOptions = [
  { text: "Let's hear you speak", language: "English" },
  { text: "Laissez-nous vous écouter parler!", language: "French" },
  { text: "¡Vamos a escucharte hablar!", language: "Spanish" }
];

function NewChatComponent() {
  return (
    <main className={styles.newChat}>
      <div className={styles.container}>
        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarContent}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/59ac9841415b9b13de17d6c98af590b676ebdb0ba556370f9d13fba1bc59091b?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" alt="Chat icon" className={styles.chatIcon} />
              <div className={styles.userInputs}>
                <input type="text" placeholder="Name" className={styles.nameInput} aria-label="Enter your name" />
                <LanguageSelector />
              </div>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e369d98f3d92b5146e0277661146b14dfbc96397daa85bc972d6fcc3466b5f5b?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" alt="Settings icon" className={styles.settingsIcon} />
            </div>
          </aside>
          <section className={styles.mainContent}>
            <ChatHeader />
            <div className={styles.languageOptions}>
              {languageOptions.map((option, index) => (
                <LanguageOption key={index} text={option.text} language={option.language} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <button className={styles.startButton}>Start</button>
    </main>
  );
}

export default NewChatComponent;