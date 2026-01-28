import { z } from 'zod';

export const createPostSchema = z.object({
	body: z.object({
		title: z.string().min(3, 'Title must be at least 3 characters'),
		content: z.string().min(10, 'Content must be at least 10 characters'),
		author: z.string().length(24, 'Invalid author ID'),
		tags: z.array(z.string()).optional(),
		published: z.boolean().optional(),
	}),
});

export const updatePostSchema = z.object({
	body: z.object({
		title: z.string().min(3, 'Title must be at least 3 characters').optional(),
		content: z
			.string()
			.min(10, 'Content must be at least 10 characters')
			.optional(),
		author: z.string().length(24, 'Invalid author ID').optional(),
		tags: z.array(z.string()).optional(),
		published: z.boolean().optional(),
	}),
	params: z.object({
		id: z.string().length(24, 'Invalid post ID'),
	}),
});

export const getPostSchema = z.object({
	params: z.object({
		id: z.string().length(24, 'Invalid post ID'),
	}),
});

export const deletePostSchema = z.object({
	params: z.object({
		id: z.string().length(24, 'Invalid post ID'),
	}),
});

export type CreatePostInput = z.infer<typeof createPostSchema>['body'];
export type UpdatePostInput = z.infer<typeof updatePostSchema>['body'];
