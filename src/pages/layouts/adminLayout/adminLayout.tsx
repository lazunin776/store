import React from 'react';
import Header from "../../../feaches/header/header";
import { Button } from 'antd';
import {MenuOutlined, CloseOutlined} from '@ant-design/icons'
import {useMenu} from "../../../feaches/menu/hooks/MenuHook";
import MenuList from "../../../feaches/menu/MenuList/MenuList";
import styles from './admin_layout.module.scss'

export const AdminLayout = ({children}: React.PropsWithChildren) => {
    const {collapsed, toggleCollapsed} = useMenu()
    return (
        <>
            <Header>
                <Button
                    onClick={toggleCollapsed}
                    className={styles.btn_menu}
                >
                    {collapsed ?  <MenuOutlined /> : <CloseOutlined/>}
                </Button>
            </Header>

            <main className={styles.main}>
                <MenuList collapsed={collapsed}/>
                <div>
                    {children}
                </div>

            </main>
        </>
    );
};


