import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Test2 {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  @Field(() => String, { description: 'Name (placeholder)' })
  name: string;

  @Field(() => String, { description: 'LastName (placeholder)' })
  lastName: string;
}
