import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  async hashPassword(password: string): Promise<string> {
    return await argon.hash(password);
  }

  async verifyPassword(hash: string, password: string): Promise<boolean> {
    return await argon.verify(hash, password);
  }
}
