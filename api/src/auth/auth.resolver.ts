import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from '../users/user.entity';
import { UsersService } from 'src/users/users.service';
import { SignupDto } from './auth.dto';
import { UserResponse, UniqueFieldError } from './auth.types';

type FieldErrors = {
  field: string;
  message: string;
}[];
@Resolver(() => User)
export class AuthResolver {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Mutation(() => UserResponse)
  async signup(@Args('user') signupDto: SignupDto): Promise<UserResponse> {
    const { name, email, username, password } = signupDto;

    let fieldErrors: UniqueFieldError[] = [];

    if (!name) {
      fieldErrors = [
        ...fieldErrors,
        { field: 'name', message: 'Name is required.' },
      ];
    }
    if (!email) {
      fieldErrors = [
        ...fieldErrors,
        { field: 'email', message: 'Email is required.' },
      ];
    }
    if (!username) {
      fieldErrors = [
        ...fieldErrors,
        { field: 'username', message: 'Username is required.' },
      ];
    }
    if (!password) {
      fieldErrors = [
        ...fieldErrors,
        { field: 'password', message: 'Password is required.' },
      ];
    }

    if (fieldErrors && fieldErrors.length) {
      return {
        errors: fieldErrors,
      };
    }

    // Validation to ensure email and username haven't been used previously to sign up

    const userByEmail = await this.usersService.findOneByEmail(email);
    if (userByEmail) {
      fieldErrors = [
        ...fieldErrors,
        { field: 'email', message: 'Email has already been taken.' },
      ];
    }

    const userByUsername = await this.usersService.findOneByUsername(username);
    if (userByUsername) {
      fieldErrors = [
        ...fieldErrors,
        { field: 'username', message: 'Username has already been taken.' },
      ];
    }

    if (fieldErrors && fieldErrors.length) {
      return {
        errors: fieldErrors,
      };
    }

    // Return a hash7ed version of the given password
    const hashedPassword = await this.authService.hashPassword(password);

    const createdUser = await this.usersService.save({
      name,
      email,
      username,
      password: hashedPassword,
    });

    return {
      user: createdUser,
    };
  }
}
