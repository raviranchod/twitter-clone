import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from '../users/user.entity';
import { UsersService } from 'src/users/users.service';
import { SignupDto } from './auth.dto';

@Resolver(() => User)
export class AuthResolver {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Mutation(() => User)
  async signup(@Args('user') signupDto: SignupDto) {
    const { name, email, username, password } = signupDto;

    // Validation to ensure username and email haven't been used previously to sign up
    const userByUsername = await this.usersService.findOneByUsername(username);
    if (userByUsername) {
      // return error
    }

    const userByEmail = await this.usersService.findOneByEmail(email);
    if (userByEmail) {
      // return error
    }

    // Return a hashed version of the given password
    const hashedPassword = await this.authService.hashPassword(password);

    return await this.usersService.save({
      name,
      email,
      username,
      password: hashedPassword,
    });
  }
}
