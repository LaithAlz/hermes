import React from "react";
import styles from './Home.module.css';
import HomeHeader from "./HomeHeader";
import RecentModule from "./RecentModule";

function HomePage() {
    return (
      <div className={styles.homepage}>
        <HomeHeader/>
        <h2>
            Welcome, Ben
        </h2>
        <RecentModule />
        </div>
    );
  }
  
  export default HomePage;