import {AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import {BiBasket} from "react-icons/bi";
import React from "react";
import {getItem, MenuItem} from "../types/MenuItem/MenuItem";
import BasketMenu from "./basket/basketMenu";


export const items: MenuItem[] = [
    getItem('Profile', '1', <UserOutlined/>),
    getItem(<BasketMenu/>,'2', <BiBasket/>),
    getItem('Option 2', '3', <DesktopOutlined/>),
    getItem('Option 3', '4', <ContainerOutlined/>),

    getItem('Navigation One', 'sub1', <MailOutlined/>, [
        getItem('Option 5', '6'),
        getItem('Option 6', '7'),
        getItem('Option 7', '8'),
        getItem('Option 8', '9'),
    ]),

    getItem('Navigation Two', 'sub2', <AppstoreOutlined/>, [
        getItem('Option 9', '10'),
        getItem('Option 10', '11'),

        getItem('Submenu', 'sub3', null, [getItem('Option 11', '12'), getItem('Option 12', '13')]),
    ]),
];