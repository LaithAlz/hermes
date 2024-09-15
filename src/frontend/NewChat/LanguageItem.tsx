import React from "react";
import styles from "./NewChat.module.css";

interface LanguageItemProps {
  text: string;
  iconSrc: string;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ text, iconSrc }) => (
  <div className={styles.languageItem}>
    <div className={styles.languageText}>{text}</div>
    <img loading="lazy" src={iconSrc} alt="" className={styles.languageIcon} />
  </div>
);

export default LanguageItem;
