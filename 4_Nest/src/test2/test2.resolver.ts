import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Test2Service } from './test2.service';
import { Test2 } from './entities/test2.entity';
import { CreateTest2Input } from './dto/create-test2.input';
import { UpdateTest2Input } from './dto/update-test2.input';

@Resolver(() => Test2)
export class Test2Resolver {
  constructor(private readonly test2Service: Test2Service) {}

  @Mutation(() => Test2)
  createTest2(@Args('createTest2Input') createTest2Input: CreateTest2Input) {
    return this.test2Service.create(createTest2Input);
  }

  @Query(() => [Test2], { name: 'test22' })
  findAll() {
    return this.test2Service.findAll();
  }

  @Query(() => Test2, { name: 'test2' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.test2Service.findOne(id);
  }

  @Mutation(() => Test2)
  updateTest2(@Args('updateTest2Input') updateTest2Input: UpdateTest2Input) {
    return this.test2Service.update(updateTest2Input.id, updateTest2Input);
  }

  @Mutation(() => Test2)
  removeTest2(@Args('id', { type: () => Int }) id: number) {
    return this.test2Service.remove(id);
  }
}
