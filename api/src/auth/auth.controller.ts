import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { SignUpDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}
  @Post('signup')
  async signup(@Body() signUpDto: SignUpDto) {
    const { name, email, username, password } = signUpDto;

    // Validation to ensure username and email haven't been used previously to sign up
    const userByUsername = await this.usersService.findOneByUsername(username);
    if (userByUsername)
      throw new HttpException(
        'That username already exists',
        HttpStatus.BAD_REQUEST,
      );

    const userByEmail = await this.usersService.findOneByEmail(email);
    if (userByEmail)
      throw new HttpException(
        'That email already exists',
        HttpStatus.BAD_REQUEST,
      );

    // Return a hashed version of the given password
    const hashedPassword = await this.authService.hashPassword(password);

    const createdUser = await this.usersService.save({
      name,
      email,
      username,
      password: hashedPassword,
    });

    return this.authService.sanitizeUser(createdUser);
  }
}
