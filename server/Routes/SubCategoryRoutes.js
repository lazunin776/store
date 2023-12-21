import { Router } from 'express'
import SubCategoryController from '../Controllers/SubCategoryController.js'


const router = Router();

router.put('/update-subcategory', SubCategoryController.updateSubCategory);
router.delete('/delete-subcategory/:id', SubCategoryController.deleteSubCategory);
router.get('/get-all-subcategories', SubCategoryController.getAllSubCategoryes);
router.post('/create-new-subcategory', SubCategoryController.createNewSubCategory);
router.get('/get-subactegory-by-id/:id', SubCategoryController.getSubCategoryById);

export default router;