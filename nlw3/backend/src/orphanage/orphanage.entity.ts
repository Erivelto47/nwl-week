import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Orphanages {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column({name: 'opening_hours'})
  openingHours: string;

  @Column({name: 'open_on_weekends'})
  openOnWeekends: boolean;
}
