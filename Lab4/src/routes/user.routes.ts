import { Router } from 'express';
import { userController } from '../controllers/user.controller';
import { validate } from '../middlewares/validator.middleware';
import {
	createUserSchema,
	updateUserSchema,
	getUserSchema,
	deleteUserSchema,
} from '../validations/user.validation';

const router = Router();

router
	.route('/')
	.get(userController.getAllUsers)
	.post(validate(createUserSchema), userController.createUser);

router
	.route('/:id')
	.get(validate(getUserSchema), userController.getUserById)
	.put(validate(updateUserSchema), userController.updateUser)
	.delete(validate(deleteUserSchema), userController.deleteUser);

export default router;
