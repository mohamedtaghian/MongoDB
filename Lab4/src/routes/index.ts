import { Router } from 'express';
import userRoutes from './user.routes';
import postRoutes from './post.routes';

const router = Router();

router.use('/api/v1/users', userRoutes);
router.use('/api/v1/posts', postRoutes);

export default router;
