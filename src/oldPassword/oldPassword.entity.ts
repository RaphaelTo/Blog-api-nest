import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from '../account/account.entity';
import { DateEntity } from '../config/date.entity';

@Entity()
export class OldPassword extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  public idOldPassword: string;

  @Column()
  public password: string;

  @ManyToOne(() => Account, (account) => account.idAccount)
  public account: Account;
}
