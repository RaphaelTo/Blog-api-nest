import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Account } from '../account/account.entity';

@Entity()
export class OldPassword {
  @PrimaryGeneratedColumn('uuid')
  public idOldPassword: string;

  @Column()
  public password: string;

  @CreateDateColumn()
  public createAt: Date;

  @UpdateDateColumn()
  public updateAt: Date;

  @ManyToOne(() => Account, (account) => account.idAccount)
  public account: Account;
}
