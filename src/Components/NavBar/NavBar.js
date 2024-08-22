import React from 'react';
import styles from './NavBar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navContainer}>
            <a href="/">Início</a>
            <a href="/about">Sobre</a>
            <a href="/cars">Carros</a>
        </nav>
    );
}
