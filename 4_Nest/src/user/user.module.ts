import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '../post/entities/post.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, User])],
  providers: [UserResolver, UserService]
})
export class UserModule {}
