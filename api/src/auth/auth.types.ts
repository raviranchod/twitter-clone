import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../users/user.entity';
import { LoginDto, SignupDto } from './auth.dto';

// Signup response
@ObjectType()
export class SignupFieldError {
  @Field(() => String)
  field: keyof SignupDto;

  @Field(() => String)
  message: string;
}

@ObjectType()
export class SignupResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [SignupFieldError], { nullable: true })
  errors?: SignupFieldError[];
}

// Login response
@ObjectType()
export class LoginFieldError {
  @Field(() => String)
  field: keyof LoginDto | '';

  @Field(() => String)
  message: string;
}

@ObjectType()
export class LoginResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [LoginFieldError], { nullable: true })
  errors?: LoginFieldError[];
}
