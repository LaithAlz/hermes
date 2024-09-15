import React from "react";
import styles from "./NewChat.module.css";
import LanguageItem from "./LanguageItem";

const NewChat: React.FC = () => {
  const languages = [
    {
      text: "Let's hear you speak",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9c65f83dee21b49f07886496a72ae55586558a073bb97fc26267f666631f53ad?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2",
    },
    {
      text: "Laissez-nous vous écouter parler!",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/97ab2deb63cc0490fe79d0228a4157b01b269376c2fa06396029dc0297a5df77?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2",
    },
    {
      text: "¡Vamos a escucharte hablar!",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7ea9bb21a181767ce24723bf2c05e677a0b01725851cbea3c872d6c5caa39bf6?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2",
    },
  ];

  return (
    <main className={styles.newChatContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.twoColumnLayout}>
          <aside className={styles.leftColumn}>
            <div className={styles.leftColumnContent}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/59ac9841415b9b13de17d6c98af590b676ebdb0ba556370f9d13fba1bc59091b?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
                alt=""
                className={styles.icon}
              />
              <form className={styles.formWrapper}>
                <label
                  htmlFor="nameInput"
                  className={styles["visually-hidden"]}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="nameInput"
                  placeholder="Name"
                  className={styles.nameInput}
                />
                <div className={styles.languageSelector}>
                  <span className={styles.selectLanguageText}>
                    Select language
                  </span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/64a02f4ba3f6c77e176b0f5287d3914073ebe3c629a042fdf2686f378ac9662f?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
                    alt=""
                    className={styles.dropdownIcon}
                  />
                </div>
              </form>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e369d98f3d92b5146e0277661146b14dfbc96397daa85bc972d6fcc3466b5f5b?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
                alt=""
                className={styles.bottomIcon}
              />
            </div>
          </aside>
          <section className={styles.rightColumn}>
            <div className={styles.mainContent}>
              <div className={styles.imageWrapper}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/adb76b6bfa64dc694da655906ef781b515bf8f31b02df0367159e6b93ceb96a9?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
                  alt=""
                  className={styles.mainImage}
                />
              </div>
              <div className={styles.textContent}>
                {languages.map((lang, index) => (
                  <LanguageItem
                    key={index}
                    text={lang.text}
                    iconSrc={lang.iconSrc}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <button className={styles.startButton}>Start</button>
    </main>
  );
};

export default NewChat;
