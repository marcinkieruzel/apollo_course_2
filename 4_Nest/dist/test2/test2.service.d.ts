import { CreateTest2Input } from './dto/create-test2.input';
import { UpdateTest2Input } from './dto/update-test2.input';
import { Test2 } from './entities/test2.entity';
export declare class Test2Service {
    create(createTest2Input: CreateTest2Input): CreateTest2Input | "This action adds a new test2";
    findAll(): Test2[];
    findOne(id: number): Test2;
    update(id: number, updateTest2Input: UpdateTest2Input): string | {
        name: string;
        lastName: string;
        id: number;
        exampleField: number;
    };
    remove(id: number): string;
}
