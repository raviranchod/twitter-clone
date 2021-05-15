import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [UsersModule],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
