import {Body, Controller, Get, HttpStatus, Param, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';

import {OrphanageService} from './orphanage.service';
import {Orphanages} from './orphanage.entity';
import {InsertResult} from 'typeorm';

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
}
