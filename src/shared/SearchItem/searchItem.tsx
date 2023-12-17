import React, {useState} from 'react';
import {AiOutlineCheck} from "react-icons/ai";
import {SlBasket} from "react-icons/sl";
import styles from './search_item.module.scss'

const SearchItem = () => {
    const [basket, setBasket] = useState(false)
    return (
        <li className={styles.item}>
            <img className={styles.product_img} src="https://avatanplus.com/files/photos/original/590ec8ec7139115be1c0dbb0.jpg" alt=""/>
            <div className={styles.product_name_and_price}>
                <div className={styles.product_name}>PRodalkfja;sldkfja;sldfkja;sdlfak</div>
                <div className={styles.price}>Price:1000</div>
            </div>
            <button className={basket ? styles.button_good : styles.button} onClick={() => setBasket(!basket)}>
                {basket ?
                    <AiOutlineCheck/>
                    :
                    <SlBasket/>
                }
            </button>
        </li>
    );
};

export default SearchItem;