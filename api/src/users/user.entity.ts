import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Tweet } from '../tweets/tweet.entity';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 50 })
  name: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column({ unique: true })
  username: string;

  @Field()
  @Column()
  password: string;

  @Field(() => [Tweet], { nullable: true })
  @OneToMany(() => Tweet, (tweet) => tweet.user)
  tweets: Tweet[];
}
