import React, { useState } from 'react';
import MenuTS from '../../app/UI/MenuTs'
import Header from "../../feaches/header/header";
import HomeSection from '../../app/components/home_section'

import classes from '../../app/Scss/home.module.scss'
const Home = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const toggleCollapsed = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <>
            <Header>
                <div></div>
            </Header>
            <main >
             <MenuTS/>
             <HomeSection/>
            </main>
            <footer>

            </footer>
        </>
    );
};

export default Home;