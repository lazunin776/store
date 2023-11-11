import React from 'react';
import {AnimatePresence} from "framer-motion";
import {useRoutes, useLocation} from "react-router-dom";
import Home from "../../pages/home/home";

const Routes = () => {
    const element = useRoutes([
        {
            path: "/",
            element: <Home />
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