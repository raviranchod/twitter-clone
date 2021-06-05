import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { GetUserByUsernameDto } from './users.dto';
import { GetTweetsResponse, GetUserByUsernameResponse } from './users.type';
import { TweetsService } from '../tweets/tweets.service';
import { forwardRef, Inject } from '@nestjs/common';
import { Tweet } from '../tweets/tweet.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    @Inject(forwardRef(() => TweetsService))
    private tweetsService: TweetsService,
  ) {}

  @Query(() => GetUserByUsernameResponse, { name: 'userByUsername' })
  async getUserByUsername(
    @Args('user') getUserByUsernameDto: GetUserByUsernameDto,
  ): Promise<GetUserByUsernameResponse> {
    const { username } = getUserByUsernameDto;

    const user = await this.usersService.findOneByUsername(username);

    if (!user) {
      return {
        error: "This account doesn't exist",
      };
    }

    return {
      user,
    };
  }

  @ResolveField('tweets', () => GetTweetsResponse)
  async getTweets(@Parent() user: User): Promise<GetTweetsResponse> {
    const { id } = user;
    const tweets = await this.tweetsService.findAll(id);

    if (!tweets) {
      return {
        error: 'No tweets found',
      };
    }

    return {
      tweets,
    };
  }
}
