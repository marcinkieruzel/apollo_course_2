import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Test2 {

  @PrimaryGeneratedColumn('increment')
  @Field(() => ID, { description: 'ID (placeholder)' })
  id: number

  @Field(() => Int, { description: 'Example field (placeholder)' })
  @Column()
  exampleField: number;

  @Column()
  @Field(() => String, { description: 'Name (placeholder)' })
  name: string;

  @Column()
  @Field(() => String, { description: 'LastName (placeholder)' })
  lastName: string;
}
