import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Tweet } from './tweet.entity';
import { TweetsService } from './tweets.service';
import { ComposeTweetDto } from './tweets.dto';
import { ComposeTweetResponse, GetUserResponse } from './tweets.types';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import { forwardRef, Inject } from '@nestjs/common';

@Resolver(() => Tweet)
class TweetsResolver {
  constructor(
    private tweetsService: TweetsService,
    @Inject(forwardRef(() => UsersService)) private usersService: UsersService,
  ) {}

  @Mutation(() => ComposeTweetResponse)
  async composeTweet(
    @Args('tweet') composeTweetDto: ComposeTweetDto,
  ): Promise<ComposeTweetResponse> {
    const { userId, tweet } = composeTweetDto;

    if (!tweet) {
      return { error: 'No tweet message found' };
    }

    return {
      tweet: await this.tweetsService.save(userId, tweet),
    };
  }

  @ResolveField('user', () => GetUserResponse, { name: 'user' })
  async getUser(@Parent() tweet: Tweet): Promise<GetUserResponse> {
    const { userId } = tweet;

    const user = await this.usersService.findOne(userId);

    if (!user) {
      return {
        error: 'No user found',
      };
    }

    return { user };
  }
}

export { TweetsResolver };
