import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignupDto {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  password: string;
}
