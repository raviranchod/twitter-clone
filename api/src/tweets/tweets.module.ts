import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweet.entity';
import { TweetsService } from './tweets.service';
import { TweetsResolver } from './tweets.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Tweet])],
  providers: [TweetsService, TweetsResolver],
})
export class TweetsModule {}
