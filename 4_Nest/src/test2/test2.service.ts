import { Injectable } from '@nestjs/common';
import { CreateTest2Input } from './dto/create-test2.input';
import { UpdateTest2Input } from './dto/update-test2.input';
import { Test2 } from './entities/test2.entity';

@Injectable()
export class Test2Service {
  create(createTest2Input: CreateTest2Input) {
    return createTest2Input
    // return {name: "sadasda", lastName: "sadasd", id: 12, exampleField: 1}
    return 'This action adds a new test2';
  }

  findAll() : Test2[] {
    return [{exampleField: 1, lastName: "Kieruzel", name: "Marcin"}, {exampleField: 2, lastName: "Kieruzel", name: "Marcin"}]
  }

  findOne(id: number) : Test2 {
    return {exampleField: 1, lastName: "Kieruzel", name: "Marcin"}
    // return `This action returns a #${id} test2`;
  }

  update(id: number, updateTest2Input: UpdateTest2Input) {
    return {name: "sadasda", lastName: "sadasd", id: 12, exampleField: 1}
    return `This action updates a #${id} test2`;
  }

  remove(id: number) {
    return `This action removes a #${id} test2`;
  }
}
