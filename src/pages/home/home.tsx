import React from 'react';
import styles from './home.module.scss'
import SliderCard from "../../widgets/SliderCard/SliderCard";
import HomeCategory from "../../widgets/homeCategory/HomeCategory";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className={styles.home_content}>
            <HomeCategory/>
            <SliderCard title={'Popular product'}/>
            <SliderCard title={'New Product'}/>

        </div>
    );
};

export default Home;