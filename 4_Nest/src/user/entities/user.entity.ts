
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from '../../post/entities/post.entity';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  username: string

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string

  @OneToMany(() => Post, post => post.user)
  posts: Post[]
}
