import React from 'react';
import {BiKey, BiSearch} from "react-icons/bi";
import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div></div>
            <div><BiKey/></div>
            <div><BiSearch/></div>
        </header>
    );
};

export default Header;