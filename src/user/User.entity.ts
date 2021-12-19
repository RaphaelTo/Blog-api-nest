import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { DateEntity } from '../config/date.entity';

@Entity()
export class User extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  public idUser: string;

  @Column({ type: 'varchar', length: 30, nullable: false })
  public lastname: string;

  @Column({ type: 'varchar', length: 30, nullable: false })
  public firstname: string;

  @Column()
  public profilPicture: string;

  @Column({ type: 'date', nullable: false })
  public birthday: string;
}
