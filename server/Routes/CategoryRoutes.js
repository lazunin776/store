import { Router } from "express";
import CategoryController from '../Controllers/CategoryController.js'


const router = Router();

router.put('/update-category', CategoryController.updateCategory)
router.delete('/delete-category/:id', CategoryController.deleteCategory)
router.get('/get-all-categories', CategoryController.getAllCategories);
router.get('/get-category-by-id/:id', CategoryController.getCategoryById)
router.post('/create-new-category', CategoryController.createNewCategory)

export default router;