import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { GetUserDto } from './users.dto';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User, { name: 'user' })
  async getUser(@Args('user') getUserDto: GetUserDto): Promise<User> {
    const { id } = getUserDto;
    return await this.usersService.findOne(id);
  }
}
