import React, {useState} from 'react';
import {Drawer} from "antd";
import styles from '../menu.module.scss'

type Basket = {
    status?: boolean,
    floatbtn?: boolean
}
const BasketMenu = ({status = false, floatbtn = true}: Basket) => {
    const [open, setOpen] = useState(status);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            {floatbtn &&
                <button
                    className={styles.basket}
                    onClick={showDrawer}
                >
                    Basket
                </button>
            }
            <Drawer title="Basket"
                    placement="right"
                    onClose={onClose}
                    open={open}>
            </Drawer>
        </>
    );
};

export default BasketMenu;