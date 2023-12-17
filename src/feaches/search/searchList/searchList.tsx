import React from 'react';
import styles from '../search.module.scss'
import SearchItem from "../../../shared/SearchItem/searchItem";

const SearchList = () => {
    // const [basket, setBasket] = useState(false)
    return (
        <ul className={styles.search_list}>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>

        </ul>
    );
};

export default SearchList;