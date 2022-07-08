import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, Length, MIN_LENGTH } from 'class-validator';

@InputType()
export class CreateTest2Input {


  @Field(() => Int)
  exampleField: number;

  @IsString()
  @Length(5, 20)
  @Field(() => String)
  name: string;

  
  @Field(() => String)
  lastName: string;
}
