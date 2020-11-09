import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}
  @Get('/')
  async findUser() {
    return await this.service.find();
  }
  @Post('/')
  async createUser(@Body() json: User) {
    return await this.service.create(json);
  }
}
