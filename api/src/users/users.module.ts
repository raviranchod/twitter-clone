import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UsersResolver } from './users.resolver';
import { TweetsModule } from '../tweets/tweets.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => TweetsModule)],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
