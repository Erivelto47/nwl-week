import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { OrphanageModule } from './orphanage/orphanage.module';
import { UploadModule } from './upload/upload.module';
import MulterConfigService from './core/config/multer-config/multer-config.service';

@Module({
  imports: [TypeOrmModule.forRoot(), OrphanageModule, UploadModule],
  controllers: [AppController],
  providers: [AppService, MulterConfigService],
})

export class AppModule {
  constructor(){}
}
