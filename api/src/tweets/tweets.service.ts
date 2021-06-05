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

  findAll(userId: string): Promise<Tweet[]> {
    return this.tweetRepository.find({
      where: { userId },
      order: { created_at: 'DESC' },
    });
  }

  async save(userId: string, tweet: string): Promise<Tweet> {
    return await this.tweetRepository.save({ userId, tweet });
  }
}
