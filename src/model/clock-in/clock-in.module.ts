import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClockInController } from './clock-in.controller';
import { ClockIn } from './clock-in.entity';
import { ClockInService } from './clock-in.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClockIn])],
  controllers: [ClockInController],
  providers: [ClockInService],
})
export class ClockInModule {}
