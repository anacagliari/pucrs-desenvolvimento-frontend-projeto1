import React from 'react';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.backgroundBox}>
            <h2 className={styles.heading}>Página Inicial</h2>
            <p className={styles.welcomeMessage}>
                Seja muito bem-vindo ao CRUD <span className={styles.highlight}>Coleção de Carrinhos HotWheels</span>
            </p>
        </div>
    )
}
