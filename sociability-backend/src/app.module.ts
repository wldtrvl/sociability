import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: 'localhost',
      username: 'admin',
      password: 'admin',
      database: 'postgres',
      // entities: [join(__dirname, '**', '*.entity.{ts, js}')],
      entities: [],
      synchronize: true,
      logging: true,
      logger: 'advanced-console',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
