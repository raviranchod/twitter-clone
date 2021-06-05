import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.entity';

@Injectable()
export class TweetsService {
  constructor(
    @InjectRepository(Tweet)
    private tweetRepository: Repository<Tweet>,
  ) {}

  async save(userId: string, tweet: string) {
    return await this.tweetRepository.save({ userId, tweet });
  }
}
