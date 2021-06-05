import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class ComposeTweetDto {
  @Field(() => ID)
  userId: string;

  @Field()
  tweet: string;
}
