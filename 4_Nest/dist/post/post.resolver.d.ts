import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
export declare class PostResolver {
    private readonly postService;
    constructor(postService: PostService);
    createPost(createPostInput: CreatePostInput): Promise<CreatePostInput & Post>;
    findAll(): Promise<Post[]>;
    findOne(id: number): Promise<Post[]>;
    updatePost(updatePostInput: UpdatePostInput): Promise<any>;
    removePost(id: number): Promise<number>;
}
