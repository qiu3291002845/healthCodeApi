import { ClockInDto } from './clock-in.interface';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClockInService } from './clock-in.service';

@Controller('clock-in')
export class ClockInController {
  constructor(private service: ClockInService) {}
  @Get('/')
  async findClockIn() {
    return await this.service.find();
  }
  @Post('/')
  async createClockIn(@Body() json: ClockInDto) {
    return await this.service.create(json);
  }
}
