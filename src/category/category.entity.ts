import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DateEntity } from '../config/date.entity';

@Entity()
export class Category extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  public idCategory: string;

  @Column({ type: 'varchar', length: 45 })
  public category: string;
}
