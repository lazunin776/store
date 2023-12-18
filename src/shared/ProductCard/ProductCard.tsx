import React, {useEffect, useState} from 'react';
import {SlBasket} from "react-icons/sl";
import styles from './productCard.module.scss'
import {AiOutlineCheck} from "react-icons/ai";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductCard = () => {
    const [title, setTitle] = useState<string>()
    const [basket, setBasket] = useState(false)
    useEffect(() => {
        setTitle('Product al;sdkf dkfajdkjf lakdsjf dfasdfasd fafa sdfasdfas dfa sdfasdfasdfasdfasdfasfasdfasdfasdfasdfasdfad')

    }, []);
    return (
        <div className={styles.product_card}>
            <div className={styles.image}>
                <LazyLoadImage effect={'blur'}  src="https://avatanplus.com/files/photos/original/590ec8ec7139115be1c0dbb0.jpg" alt=""/>
            </div>
            <div id={'title'} className={styles.title_card}>{title?.slice(0, 40) + '...'}</div>
            <div className={styles.price_and_byu}>
                <div className="price">Price: 1000</div>
                <button className={basket ? styles.button_good : styles.button} onClick={() => setBasket(!basket)}>
                    {basket ?
                        <AiOutlineCheck/>
                        :
                        <SlBasket/>
                    }
                </button>
            </div>
        </div>
    );
};

export default ProductCard;