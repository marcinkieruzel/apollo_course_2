import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {

  @Field(() => String, { description: "Tytuł" })
  title: string

  @Field(() => String, { description: "Body" })
  body: string

}
