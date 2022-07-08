import { CreateTest2Input } from './create-test2.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTest2Input extends PartialType(CreateTest2Input) {
  @Field(() => Int)
  id: number;
}
