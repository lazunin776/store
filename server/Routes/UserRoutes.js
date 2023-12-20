import { Router } from "express";
import ProductController from "../Controllers/ProductController.js";
import UserConteroller from "../Controllers/UserConteroller.js";

const router = Router();


router.put('/uptade-user', UserConteroller.updateUser);
router.get('/get-all-users', UserConteroller.getAllUsers);
router.delete('/delete-user', UserConteroller.deleteUser);
router.post('/create-new-user', UserConteroller.createNewUser);
router.get('/get-user-by-id', UserConteroller.getUserById);

export default router;