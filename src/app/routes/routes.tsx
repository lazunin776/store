import React, {lazy, Suspense} from 'react';
import {Route, Routes as Rout} from "react-router-dom";
import {Admin} from '../../pages/admin/pages'
import '../../App.css'
import {AnimatePresence} from "framer-motion";

const Routes = () => {
    const StandartLayout = lazy(() => import('../../pages/layouts/standartLayout/standartLayout'))
    const Home = lazy(() => import('../../pages/home/home'))
    const Product = lazy(() => import('../../pages/product/product'))

    return (<AnimatePresence mode="wait" initial={false}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Rout>
                        <Route path={'/'} element={<StandartLayout/>}>
                            <Route  index element={<Suspense><Home/></Suspense>}/>
                            <Route element={<Suspense><Product/></Suspense>} path={'/category/product/:id'}/>
                        </Route>
                        <Route path={'/admin'} element={<Admin/>}/>
                    </Rout>
                </Suspense>
        </AnimatePresence>);
};

export default Routes;