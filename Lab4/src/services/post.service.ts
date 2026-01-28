import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { ICrudService } from '../types/crud.interface';
import { IPostDocument } from '../types/post.types';
import { CustomError } from '../utils/customError';

export class PostService implements ICrudService<IPostDocument> {
	async getAll(): Promise<IPostDocument[]> {
		return await Post.find().sort({ createdAt: -1 });
	}

	async getById(id: string): Promise<IPostDocument> {
		const post = await Post.findById(id);
		if (!post) {
			throw new CustomError('Post not found', 404);
		}
		return post;
	}

	async create(data: Partial<IPostDocument>): Promise<IPostDocument> {
		if (data.author) {
			const user = await User.findById(data.author);
			if (!user) {
				throw new CustomError('Author not found', 404);
			}
		}

		return await Post.create(data);
	}

	async update(
		id: string,
		data: Partial<IPostDocument>,
	): Promise<IPostDocument> {
		if (data.author) {
			const user = await User.findById(data.author);
			if (!user) {
				throw new CustomError('Author not found', 404);
			}
		}

		const post = await Post.findByIdAndUpdate(id, data, {
			new: true,
		});

		if (!post) {
			throw new CustomError('Post not found', 404);
		}

		return post;
	}

	async delete(id: string): Promise<void> {
		const post = await Post.findByIdAndDelete(id);
		if (!post) {
			throw new CustomError('Post not found', 404);
		}
	}
}

export const postService = new PostService();
