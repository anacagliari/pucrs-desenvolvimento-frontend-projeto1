import React from 'react';
import styles from './About.module.css';

export default function About() {
    return (
        <div className={styles.backgroundBox}>
            <h2 className={styles.heading}>Sobre</h2>
            <p className={styles.welcomeMessage}>
                Esta é uma aplicação para um CRUD de <span className={styles.highlight}>Coleção de Carrinhos HotWheels</span> criado por Ana Caroline Cagliari Cappellari.
            </p>
        </div>
    )
}