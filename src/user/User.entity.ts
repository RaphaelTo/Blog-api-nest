import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  @Column({ type: 'datetime', nullable: false })
  public createAt: string;

  @Column({ type: 'datetime', nullable: false })
  public updateAt: string;
}
