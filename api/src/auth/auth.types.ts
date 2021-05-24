import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../users/user.entity';
import { SignupDto } from './auth.dto';

@ObjectType()
export class UniqueFieldError {
  @Field(() => String)
  field: keyof SignupDto;

  @Field(() => String)
  message: string;
}

@ObjectType()
export class UserResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [UniqueFieldError], { nullable: true })
  errors?: UniqueFieldError[];
}
