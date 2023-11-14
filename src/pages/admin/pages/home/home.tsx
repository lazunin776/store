import React from 'react';
import {Typography} from "antd";
import styles from './home.module.scss'

const Admin = () => {
    return (
        <div>
            <header></header>
            <main>
                <div>menu</div>
                <div className={styles.content}>
                    <div className="graphics">
                        <Typography>
                            Графики в этапе разработки
                        </Typography>
                    </div>
                    <div>
                        <div className={styles.message}></div>
                        <div className={styles.profile}></div>
                        <div className={styles.adveresting}></div>
                        <div className={styles.statistic}></div>
                    </div>
                    <div className="products"></div>
                    <div className="category"></div>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default Admin;