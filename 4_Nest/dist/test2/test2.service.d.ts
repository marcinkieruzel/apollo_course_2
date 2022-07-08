import { Repository } from 'typeorm';
import { CreateTest2Input } from './dto/create-test2.input';
import { UpdateTest2Input } from './dto/update-test2.input';
import { Test2 } from './entities/test2.entity';
export declare class Test2Service {
    private readonly test2Repository;
    constructor(test2Repository: Repository<Test2>);
    create(createTest2Input: CreateTest2Input): Promise<CreateTest2Input & Test2>;
    findAll(): Promise<Test2[]>;
    findOne(id: number): Test2;
    update(id: number, updateTest2Input: UpdateTest2Input): string | {
        name: string;
        lastName: string;
        id: number;
        exampleField: number;
    };
    remove(id: number): string;
}
