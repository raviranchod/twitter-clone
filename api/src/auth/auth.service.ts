import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { User } from '../users/user.entity';
import { SanitizeUserType } from './auth.type';

@Injectable()
export class AuthService {
  async hashPassword(password: string): Promise<string> {
    return await argon.hash(password);
  }

  sanitizeUser(user: User): SanitizeUserType {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = user;
    return rest;
  }

  async verifyPassword(hash: string, password: string): Promise<boolean> {
    return await argon.verify(hash, password);
  }
}
