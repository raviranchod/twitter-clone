import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { GetUserByUsernameDto } from './users.dto';
import { GetUserByUsernameResponse } from './users.type';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

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
}
