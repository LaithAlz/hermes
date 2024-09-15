import React from "react";
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.newChatButton}>
        New chat
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d36977be4edc02e00c1c9e3b600a58e54257338aedc0434b7ae415a271a48130?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" alt="" className={styles.buttonIcon} />
      </button>
      <form className={styles.searchForm}>
        <label htmlFor="searchInput" className="visually-hidden">Search</label>
        <input
          type="search"
          id="searchInput"
          placeholder="Search"
          className={styles.searchInput}
        />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/099407de9d65c0ebe04e6d7f79cfb3eb5f14d60c7fac98a2679e78c2bace5da9?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" alt="" className={styles.searchIcon} />
      </form>
      <time className={styles.currentDate}>
        Sept 8th <br /> 2024
      </time>
    </header>
  );
}

export default Header;