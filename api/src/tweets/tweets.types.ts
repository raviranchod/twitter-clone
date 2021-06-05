import { Field, ObjectType } from '@nestjs/graphql';
import { Tweet } from './tweet.entity';
import { User } from '../users/user.entity';

@ObjectType()
export class ComposeTweetResponse {
  @Field(() => Tweet, { nullable: true })
  tweet?: Tweet;

  @Field(() => String, { nullable: true })
  error?: string;
}

@ObjectType()
export class GetUserResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => String, { nullable: true })
  error?: string;
}
