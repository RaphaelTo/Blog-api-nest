import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  public idAccount: string;

  @Column({ type: 'varchar', length: 45 })
  public email: string;

  @Column({ type: 'varchar', length: 45 })
  public password: string;

  @Column({ type: 'boolean' })
  public isActivate: boolean;

  @CreateDateColumn({ type: 'datetime' })
  public createAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  public updateAt: Date;
}
