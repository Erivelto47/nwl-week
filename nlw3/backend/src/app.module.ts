import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { OrphanageModule } from './orphanage/orphanage.module';
import {Connection} from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), OrphanageModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private connection: Connection){}
}

