import { Router } from "express";
import ProductController from "../Controllers/ProductController.js";

const router = Router();


router.put('/uptade-product', ProductController.updateProduct);
router.get('/get-all-products', ProductController.getAllProducts);
router.delete('/delete-product', ProductController.deleteProduct);
router.post('/create-new-product', ProductController.addNewProduct);
router.get('/get-product-by-id', ProductController.getProductById);

export default router;