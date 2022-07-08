import { forwardRef, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {join} from 'path'
import { TestModule } from './test/test.module';
import { dataSourceOptions } from './ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test2Module } from './test2/test2.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    forwardRef(() => TypeOrmModule.forRoot({ ...dataSourceOptions, autoLoadEntities: true, })),
    
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),

    TestModule,

    Test2Module,

    PostModule,

    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
