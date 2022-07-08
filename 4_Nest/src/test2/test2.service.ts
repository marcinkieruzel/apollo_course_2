import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTest2Input } from './dto/create-test2.input';
import { UpdateTest2Input } from './dto/update-test2.input';
import { Test2 } from './entities/test2.entity';

@Injectable()
export class Test2Service {
  constructor(
    @InjectRepository(Test2) private readonly test2Repository: Repository<Test2>
  ) {

  }

  async create(createTest2Input: CreateTest2Input) {

    try {
      return await this.test2Repository.save(createTest2Input)
    } catch (error) {
      throw new HttpException("Nie można dodać testu", HttpStatus.BAD_REQUEST)
    }


  }

  async findAll(): Promise<Test2[]> {
    try {
      return await this.test2Repository.find()
    } catch (error) {
      throw new HttpException("Nie można dodać testów", HttpStatus.BAD_REQUEST)
    }
  }

  findOne(id: number): Test2 {
    return { exampleField: 1, lastName: "Kieruzel", name: "Marcin", id: 1 }
    // return `This action returns a #${id} test2`;
  }

  update(id: number, updateTest2Input: UpdateTest2Input) {
    return { name: "sadasda", lastName: "sadasd", id: 12, exampleField: 1 }
    return `This action updates a #${id} test2`;
  }

  remove(id: number) {
    return `This action removes a #${id} test2`;
  }
}
