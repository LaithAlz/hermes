import React from "react";
import styles from './Card.module.css';
import Pill from './Pill'
import AIPill from './AIPill'
import ChatIcon from '../../assets/chaticon.svg'

function Card(props){

    return(
        <div className={styles.cardstyle}>
            <img src={ChatIcon}/>
            <p>{props.client}</p>
            <Pill language="French"/>
            <p>Sept 8th</p>
            <div className={styles.pillsrow}>
                <AIPill />
                <AIPill />
                <AIPill />
            </div>
         </div>
    );
}

export default Card