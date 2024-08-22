import React from "react";
import styles from './MyHeader.module.css';

function MyHeader(props) {
    return (
        <header className={styles.headerContainer}>
            <h1>{props.title}</h1>
        </header>
    );
}

export default MyHeader;
