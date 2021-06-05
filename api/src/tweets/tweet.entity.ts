import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../users/user.entity';

@ObjectType()
@Entity()
export class Tweet {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 280 })
  tweet: string;

  @Field()
  @Column()
  userId: string;
  @Field(() => User)
  @ManyToOne(() => User, (user) => user.tweets)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;
}
