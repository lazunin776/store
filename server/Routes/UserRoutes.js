import { Router } from "express";
import ProductController from "../Controllers/ProductController";

const router = Router();


router.put('/uptade-user', ProductController.updateProduct);
router.get('/get-all-users', ProductController.getAllProducts);
router.delete('/delete-user', ProductController.deleteProduct);
router.post('/create-new-user', ProductController.addNewProduct);
router.get('/get-user-by-id', ProductController.getProductById);

export default router;