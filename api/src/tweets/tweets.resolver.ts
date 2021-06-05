import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Tweet } from './tweet.entity';
import { TweetsService } from './tweets.service';
import { ComposeTweetDto } from './tweets.dto';

@Resolver(() => Tweet)
class TweetsResolver {
  constructor(private tweetsService: TweetsService) {}

  @Mutation(() => Tweet)
  async composeTweet(
    @Args('tweet') composeTweetDto: ComposeTweetDto,
  ): Promise<Tweet> {
    const { userId, tweet } = composeTweetDto;
    return await this.tweetsService.save(userId, tweet);
  }
}

export { TweetsResolver };
