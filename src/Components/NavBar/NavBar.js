import React from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className={styles.navContainer}>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/about">Sobre</Link></li>
                <li><Link to="/cars">Carros</Link></li>
            </ul>
        </nav>
    );
}
