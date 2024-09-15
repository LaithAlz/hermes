import React from "react";
import styles from './RecentModule.module.css';
import Card from './Card'

function RecentModule(props) {
    return (
      <div className={styles.recentmodule}>
        <h2>Recent conversations</h2>
        <div className="longrow">
            <Card client="Jacque"/>
            <Card client="Maria"/>
        </div>
        <div className="regrow">
            <Card client="Oreo"/>
            <Card client="Jamal"/>
            <Card client="Jokic"/>
        </div>
        <span>View more...</span>
        </div>
    );
  }
  
  export default RecentModule;