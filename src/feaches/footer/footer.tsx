import React from 'react';
import styles from './footer.module.scss'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.creators}>
                <a className={styles.developer} href="mail:lazuninandriy@gmail.com">
                    Главный менеджер: <br/>

                </a>
                <a className={styles.developer} href="mail:lazuninandriy@gmail.com">
                    Менеджер: <br/>

                </a>
                <a className={styles.developer} href="mail:lazuninandriy@gmail.com">
                    Developer by: <br/>
                    lazuninandriy@gmail.com
                </a>
            </div>
            <div className={styles.company_and_right}>
                <div className={styles.logo_and_name}>
                    <h1>ФОП Чередниченко</h1>
                    <img className={styles.logo_img} src={`${process.env.PUBLIC_URL}/logo_cherednichenko.png`} alt=""/>
                </div>
                <div>
                    <p>
                        All right security 2023-2024
                    </p>
                </div>
            </div>
            <div className={styles.all_link}>
                <div className={styles.footer_link}>
                    <Link to={'#'}>О нас</Link>
                    <Link to={'#'}>Контакты</Link>
                    <Link to={'#'}>Доставка</Link>
                    <Link to={'#'}>Гарантия</Link>
                    <Link to={'#'}>Возврат</Link>
                </div>
                <div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;