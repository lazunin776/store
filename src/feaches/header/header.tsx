import React, {useState} from 'react';
import {BiKey, BiSearch} from "react-icons/bi";
import styles from './header.module.scss'
import { Button, Drawer, Radio, Space } from 'antd';
import type { DrawerProps } from 'antd/es/drawer';


const Header = ({children} : React.PropsWithChildren) => {

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
  
    const showDrawer = () => {
      setOpen(true);
    };
    
    const onClose = () => {
      setOpen(false);
    };
  
    
    return (
        <header className={styles.header}>
            <div>{children}</div>
            <div><BiKey/></div>
            <div><BiSearch/></div>
        </header>
    );
};

export default Header;