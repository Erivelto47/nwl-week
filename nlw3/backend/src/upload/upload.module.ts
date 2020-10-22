import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import {MulterModule} from '@nestjs/platform-express';
import MulterConfigService from '../core/config/multer-config/multer-config.service';

@Module({
  imports: [MulterModule.registerAsync({
    useClass: MulterConfigService
  })],
  providers: [UploadService],
  controllers: [UploadController]
})
export class UploadModule {}
