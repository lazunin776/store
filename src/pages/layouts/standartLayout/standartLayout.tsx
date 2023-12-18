import React, {useState} from 'react';
import Header from "../../../feaches/header/header";
import {Button, FloatButton} from 'antd';
import {AppstoreOutlined, CloseOutlined, MenuOutlined, PhoneOutlined} from '@ant-design/icons'
import {useMenu} from "../../../feaches/menu/hooks/MenuHook";
import MenuList from "../../../feaches/menu/MenuList/MenuList";
import styles from './standart_layout.module.scss'
import {SlBasket} from "react-icons/sl";
import BasketMenu from "../../../feaches/menu/MenuList/basket/basketMenu";
import Footer from "../../../feaches/footer/footer";
import {Outlet} from "react-router-dom";

 const StandartLayout = ({children}: React.PropsWithChildren) => {
    const {collapsed, toggleCollapsed} = useMenu()
    const [drawerBasket, setDrawerBasket] = useState(false)
    return (
        <>
            <Header>
                <Button
                    onClick={toggleCollapsed}
                    className={styles.btn_menu}
                >
                    {collapsed ? <MenuOutlined/> : <CloseOutlined/>}
                </Button>
            </Header>

            <main className={styles.main}>
                <MenuList collapsed={collapsed}/>
                <div>
                    <Outlet/>
                </div>
                {drawerBasket &&
                    <BasketMenu status={true} floatbtn={false}/>
                }
                <FloatButton.Group
                    trigger="click"

                    type="default"
                    style={{right: 24}}
                    icon={<AppstoreOutlined/>}
                >
                    <FloatButton tooltip={'Show basket'} onClick={() => setDrawerBasket(!drawerBasket)} icon={<SlBasket/>} />
                    <FloatButton.BackTop tooltip={'Back to top'}/>
                    <FloatButton tooltip={'Number phone'} href={'tel:+380 95 409 33 74'} icon={<PhoneOutlined />}/>
                </FloatButton.Group>

            </main>
            <Footer/>
        </>
    );
};
 export default StandartLayout;


