import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DateEntity } from '../config/date.entity';

@Entity()
export class Tag extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  public idTag: string;

  @Column({ type: 'varchar', length: 45 })
  public tag: string;
}
