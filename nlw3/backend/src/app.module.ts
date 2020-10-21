import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { OrphanageModule } from './orphanage/orphanage.module';
import {Connection} from 'typeorm';
import {MulterModule} from '@nestjs/platform-express';
import MulterConfigService from './core/config/multer-config/multer-config.service';



@Module({
  imports: [TypeOrmModule.forRoot(), OrphanageModule, MulterModule.registerAsync({
    useClass: MulterConfigService,
  })],
  controllers: [AppController],
  providers: [AppService, MulterConfigService],
})

export class AppModule {
  constructor(private connection: Connection){}
}

