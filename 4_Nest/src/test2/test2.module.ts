import { Module } from '@nestjs/common';
import { Test2Service } from './test2.service';
import { Test2Resolver } from './test2.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test2 } from './entities/test2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Test2])],
  providers: [Test2Resolver, Test2Service]
})
export class Test2Module {}
