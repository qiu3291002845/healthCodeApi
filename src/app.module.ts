import { ClockIn } from './model/clock-in/clock-in.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './model/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/user/user.entity';
import { ClockInModule } from './model/clock-in/clock-in.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'healthCode',
      entities: [User, ClockIn],

      synchronize: true,
    }),
    ClockInModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
