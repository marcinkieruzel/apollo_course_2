import { Test2Service } from './test2.service';
import { Test2 } from './entities/test2.entity';
import { CreateTest2Input } from './dto/create-test2.input';
import { UpdateTest2Input } from './dto/update-test2.input';
export declare class Test2Resolver {
    private readonly test2Service;
    constructor(test2Service: Test2Service);
    createTest2(createTest2Input: CreateTest2Input): Promise<CreateTest2Input & Test2>;
    findAll(): Promise<Test2[]>;
    findOne(id: number): Test2;
    updateTest2(updateTest2Input: UpdateTest2Input): string | {
        name: string;
        lastName: string;
        id: number;
        exampleField: number;
    };
    removeTest2(id: number): string;
}
