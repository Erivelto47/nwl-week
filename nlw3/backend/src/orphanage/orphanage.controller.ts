import {Body, Controller, Get, HttpStatus, Param, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';

import {OrphanageService} from './orphanage.service';
import {Orphanages} from './orphanage.entity';
import {InsertResult} from 'typeorm';
import {FilesInterceptor} from '@nestjs/platform-express';

import { diskStorage } from 'multer';

@Controller('orphanage')
export class OrphanageController {

  constructor(private orphanageService: OrphanageService) {
  }

  @Get()
  index(): Promise<Orphanages[]> {
    return this.orphanageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Orphanages> {
    return this.orphanageService.findOne(id);
  }

  @Post()
  create(@Body() orphange: Orphanages): Promise<InsertResult> {
   return this.orphanageService.insert(orphange);
  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files', 10, {
    storage: diskStorage({
      destination: './src/database/storage/images',
    }),
  }),)
  async uploadFile(@UploadedFiles() files, @Body('id') id) {
    const response = [];

    console.log(id);
    console.log(files);
    files.forEach(file => {
      const fileResponse = {
        originalname: file.originalName,
        filename: file.filename
      };
      response.push(fileResponse);
    })

    return {
      status: HttpStatus.OK,
      message: 'Images uploaded successfully!',
      data: response
    }
  }
}
