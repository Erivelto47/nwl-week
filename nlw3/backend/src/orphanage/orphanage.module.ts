import { Module } from '@nestjs/common';
import { OrphanageController } from './orphanage.controller';
import { OrphanageService } from './orphanage.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Orphanages} from './orphanage.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Orphanages])],
  controllers: [OrphanageController],
  providers: [OrphanageService]
})
export class OrphanageModule {}
