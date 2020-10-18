import { Module } from '@nestjs/common';
import { OrphanageController } from './orphanage.controller';
import { OrphanageService } from './orphanage.service';

@Module({
  controllers: [OrphanageController],
  providers: [OrphanageService]
})
export class OrphanageModule {}
