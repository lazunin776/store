import React, {useState} from 'react';
import {AiOutlineMenu} from "react-icons/ai";
import {BiKey, BiSearch} from "react-icons/bi";
import styles from './header.module.scss'

const Header = ({children}: React.PropsWithChildren) => {
    return (
        <header className={styles.header}>
            <div>{children}</div>
            <div><BiKey/></div>
            <div><BiSearch/></div>
        </header>
    );
};

export default Header;