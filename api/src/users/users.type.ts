import { Field, ObjectType } from '@nestjs/graphql';
import { Tweet } from 'src/tweets/tweet.entity';
import { User } from './user.entity';

export interface SaveType {
  name: string;
  email: string;
  username: string;
  password: string;
}

@ObjectType()
export class GetUserByUsernameResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => String, { nullable: true })
  error?: string;
}

@ObjectType()
export class GetTweetsResponse {
  @Field(() => [Tweet], { nullable: true })
  tweets?: Tweet[];

  @Field(() => String, { nullable: true })
  error?: string;
}
