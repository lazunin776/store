import React from 'react';
import {Menu} from "antd";
import {items} from "./items";
import {IMenuList} from "../types/MenuListTypes/IMenuList";
import styles from './menu.module.scss'


const MenuList = ({collapsed}: IMenuList) => {

    return (
        <Menu
            className={styles.menu}
            mode="inline"
            inlineCollapsed={collapsed}
            items={items}
        />

    );
};

export default MenuList;