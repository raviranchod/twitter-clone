import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from '../users/user.entity';
import { UsersService } from 'src/users/users.service';
import { PublicRoute } from '../common/decorators/public-route.decorator';
import { LoginDto, SignupDto } from './auth.dto';
import {
  SignupResponse,
  SignupFieldError,
  LoginResponse,
  LoginFieldError,
} from './auth.types';

@Resolver(() => User)
export class AuthResolver {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @PublicRoute()
  @Mutation(() => SignupResponse)
  async signup(@Args('user') signupDto: SignupDto): Promise<SignupResponse> {
    const { name, email, username, password } = signupDto;

    let fieldErrors: SignupFieldError[] = [];

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

  @Mutation(() => LoginResponse)
  @PublicRoute()
  async login(
    @Args('user') loginDto: LoginDto,
    @Context() ctx,
  ): Promise<LoginResponse> {
    const { username, password } = loginDto;

    let fieldErrors: LoginFieldError[] = [];

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

    const userByUsername = await this.usersService.findOneByUsername(username);
    if (!userByUsername) {
      return {
        errors: [
          {
            field: '',
            message:
              'The email and password that you entered did not match our records. Please double-check and try again.',
          },
        ],
      };
    }

    const verifiedUser = await this.authService.verifyPassword(
      userByUsername.password,
      password,
    );
    if (!verifiedUser) {
      return {
        errors: [
          {
            field: '',
            message:
              'The email and password that you entered did not match our records. Please double-check and try again.',
          },
        ],
      };
    }

    ctx.request.session.set('user', { id: userByUsername.id });
    await ctx.request.session.save();

    return {
      user: userByUsername,
    };
  }
}
