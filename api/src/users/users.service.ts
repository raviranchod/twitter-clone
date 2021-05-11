import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { SaveType } from './users.type';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  findAll(): Promise<User[] | undefined> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User | undefined> {
    return this.usersRepository.findOne(id);
  }

  findOneByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ email });
  }

  findOneByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ username });
  }

  async save(user: SaveType): Promise<User> {
    return await this.usersRepository.save(user);
  }
}
