import { Test, TestingModule } from '@nestjs/testing';
import { Test2Resolver } from './test2.resolver';
import { Test2Service } from './test2.service';

describe('Test2Resolver', () => {
  let resolver: Test2Resolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Test2Resolver, Test2Service],
    }).compile();

    resolver = module.get<Test2Resolver>(Test2Resolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
