import React, {useState} from 'react';
import Header from "../../feaches/header/header";


const Home = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const toggleCollapsed = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <>
            <Header/>
            <main>

            </main>
            <footer>

            </footer>
        </>
    );
};

export default Home;