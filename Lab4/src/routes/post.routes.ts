import { Router } from 'express';
import { postController } from '../controllers/post.controller';
import { validate } from '../middlewares/validator.middleware';
import {
	createPostSchema,
	updatePostSchema,
	getPostSchema,
	deletePostSchema,
} from '../validations/post.validation';

const router = Router();

router
	.route('/')
	.get(postController.getAllPosts)
	.post(validate(createPostSchema), postController.createPost);

router
	.route('/:id')
	.get(validate(getPostSchema), postController.getPostById)
	.put(validate(updatePostSchema), postController.updatePost)
	.delete(validate(deletePostSchema), postController.deletePost);

export default router;
