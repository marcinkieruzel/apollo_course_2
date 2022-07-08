import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@ObjectType()
@Entity()
export class Post {

  @PrimaryGeneratedColumn("increment")
  @Field(() => ID, {description: "ID encji"})
  id: number


  @Column()
  @Field(() => String, {description: "Tytuł"})
  title: string


  @Column()
  @Field(() => String, {description: "Body"})
  body: string

  @ManyToOne(() => User, user => user.posts)
  user: User

}
