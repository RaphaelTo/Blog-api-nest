import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { DateEntity } from '../../config/date.entity';
import { Account } from '../account/account.entity';

@Entity()
export class ResetPassword extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  public idResetPassword: string;

  @Column({ type: 'text', nullable: false })
  public tokenLink: string;

  @Column({ type: 'varchar', length: 4, nullable: false })
  public key: string;

  @Column({ type: 'boolean', nullable: false, default: true })
  public isEnable: boolean;

  @ManyToOne(() => Account, (account) => account.idAccount, { nullable: false })
  public account: Account;
}
