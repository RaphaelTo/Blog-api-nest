import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from '../account/account.entity';
import { DateEntity } from '../../config/date.entity';

@Entity()
export class OldPassword extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  public idOldPassword: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  public password: string;

  @ManyToOne(() => Account, (account) => account.idAccount, { nullable: false })
  public account: Account;
}
