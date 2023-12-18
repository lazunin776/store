import React, {useState} from 'react';
import {Button} from "antd";
import {CloseOutlined, SearchOutlined} from "@ant-design/icons";
import styles from './search.module.scss'
const Search = () => {
    const [click, setClick] = useState(true)
    return (
        <Button onClick={() => setClick(!click)} className={styles.search_button}>
            {click ?
                <SearchOutlined/>
                :
                <CloseOutlined/>
            }
        </Button>
    );
};

export default Search;