import React from 'react';
import {AnimatePresence} from "framer-motion";
import {useRoutes, useLocation} from "react-router-dom";
import Home from "../../pages/home/home";
import {Admin} from '../../pages/admin/pages'

const Routes = () => {
    const element = useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: '/admin',
            element: <Admin/>
        }
    ]);

    const location = useLocation();

    if (!element) return null;

    return (
        <AnimatePresence mode="wait" initial={false}>
            {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
    );
};

export default Routes;