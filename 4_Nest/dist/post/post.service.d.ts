import { DataSource, Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';
export declare class PostService {
    private readonly postRepository;
    private dataSource;
    constructor(postRepository: Repository<Post>, dataSource: DataSource);
    create(createPostInput: CreatePostInput): Promise<CreatePostInput & Post>;
    findAll(): Promise<Post[]>;
    findOne(id: number): Promise<Post[]>;
    update(id: number, updatePostInput: UpdatePostInput): Promise<any>;
    remove(id: number): Promise<number>;
}
