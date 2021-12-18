import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
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

  @CreateDateColumn({ type: 'datetime' })
  public createAt: string;

  @UpdateDateColumn({ type: 'datetime' })
  public updateAt: string;
}
