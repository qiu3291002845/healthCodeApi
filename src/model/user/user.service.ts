import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly UserEntity: Repository<User>,
  ) {}
  async find() {
    return await this.UserEntity.find();
  }
  async create(body: User) {
    const { openid } = body;
    const isUser = await this.UserEntity.query(`
      select * from user where openid = '${openid}'
    `);
    if (!isUser[0]) {
      const created = await this.UserEntity.create(body);
      await this.UserEntity.save(created);
      return {
        message: 'User created successfully',
        statusCode: 200,
      };
    } else {
      return {
        message: 'User already exists',
        statusCode: 500,
      };
    }
  }
}
