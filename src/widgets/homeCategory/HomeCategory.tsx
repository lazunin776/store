import React from 'react';
import styles from './homeCategory.module.scss'
import {Typography} from "antd";

const HomeCategory = () => {
    return (
        <section className={styles.conteiner_category}>
            <Typography className={styles.title_section}>Category</Typography>
            <ul className={styles.category_home}>
                <li>Category</li>
                <li>Category</li>
                <li>Category</li>
                <li>Category</li>
                <li>Category</li>
            </ul>
        </section>
    );
};

export default HomeCategory;