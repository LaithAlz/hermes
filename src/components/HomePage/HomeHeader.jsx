import React from "react";
import styles from "./HomeHeader.module.css";
import NewChatIcon from '../../assets/newchat.svg'

function HomeHeader() {
    return (
      <div className={styles.homeheader}>
        <button className={styles.newchat}>New Chat</button>
        <input className={styles.homesearch} placeholder="Search" />
        <span className={styles.datetime}>Sept 8th, 2024</span>
      </div>
    );
}

export default HomeHeader;
