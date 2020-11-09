import { ClockIn } from './clock-in.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClockInDto } from './clock-in.interface';

@Injectable()
export class ClockInService {
  constructor(
    @InjectRepository(ClockIn)
    private readonly clockInEntity: Repository<ClockIn>,
  ) {}
  async find() {
    return await this.clockInEntity.find();
  }
  async create(body: ClockInDto) {
    const created = await this.clockInEntity.create(body);
    await this.clockInEntity.save(created);
    return {
      message: 'create success',
      statusCode: 200,
    };
  }
}
