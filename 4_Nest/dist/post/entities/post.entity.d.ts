import { User } from '../../user/entities/user.entity';
export declare class Post {
    id: number;
    title: string;
    body: string;
    user: User;
}
