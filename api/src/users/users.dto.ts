import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetUserDto {
  @Field(() => ID)
  id: string;
}
