import { Module } from '@nestjs/common';
import { Test2Service } from './test2.service';
import { Test2Resolver } from './test2.resolver';

@Module({
  providers: [Test2Resolver, Test2Service]
})
export class Test2Module {}
