import React, {useState} from 'react';
import styles from './header.module.scss'
import Search from "../search/search";
import {Input} from "antd";
import SearchList from "../search/searchList/searchList";

const Header = ({children}: React.PropsWithChildren) => {
    const [search, setSearch] = useState(false)
    const toggleSearch = () => {
        setSearch(!search)
    }
    return (
        <header className={styles.header}>
            {children}
            <div className={styles.logo_search_input}>
                {search ?
                    <>
                        <Input
                            className={styles.search_input}
                        />
                        <SearchList/>

                    </>
                    :
                    <div
                        className={styles.logo_text}
                    >
                        <img src={`${process.env.PUBLIC_URL}/logo_cherednichenko.png`} alt=""/>
                    </div>
                }
            </div>
            <div onClick={toggleSearch}><Search/></div>
        </header>
    );
};

export default Header;