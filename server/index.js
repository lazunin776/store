import express from 'express';
import mongoose from 'mongoose';

import cors from 'cors'
import sources from './sources.js';
import cookieParser from 'cookie-parser';
import useUsers from './Routes/UserRoutes.js'
import useProducts from './Routes/ProductRoutes.js'
import useCategoryies from './Routes/CategoryRoutes.js'
import useSubcategory from './Routes/SubCategoryRoutes.js'

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/api/users', useUsers);
app.use('/api/product', useProducts);
app.use('/api/categories', useCategoryies);
app.use('/api/subcategory', useSubcategory);



const SERVER_PATH = sources.SERVER_PATH
const DB_PATH = sources.DB_PATH 

mongoose.connect(DB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error(err);
});

app.listen(SERVER_PATH, () => {
    console.log(SERVER_PATH)
});
