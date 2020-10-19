import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {InsertResult, Repository} from 'typeorm';

import {Orphanages} from './orphanage.entity';

@Injectable()
export class OrphanageService {

  constructor(
    @InjectRepository(Orphanages)
    private orphanageRepository: Repository<Orphanages>
  ) {}

  findAll(): Promise<Orphanages[]> {
    return this.orphanageRepository.find();
  }

  findOne(id: number): Promise<Orphanages> {
    return this.orphanageRepository.findOne(id);
  }

  insert(orphanage: Orphanages): Promise<InsertResult> {
    return this.orphanageRepository.insert(orphanage);
  }
}
