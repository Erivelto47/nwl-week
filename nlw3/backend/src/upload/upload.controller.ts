import {Body, Controller, HttpStatus, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {FilesInterceptor} from '@nestjs/platform-express';

import {MulterReqestInterceptor} from '../core/config/multer-config/multer-reqest.interceptor';

@UseInterceptors(MulterReqestInterceptor)
@Controller('upload')
export class UploadController {

  @Post('orphanage-images')
  @UseInterceptors(FilesInterceptor('image', 10))
  async uploadFile(@UploadedFiles() files, @Body('id') id) {

    return {
      status: HttpStatus.OK,
      message: 'Images uploaded successfully!'
    }
  }
}
