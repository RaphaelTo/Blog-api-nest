import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { RulesAccount } from '../rulesAccount/rulesAccount.entity';
import { User } from '../user/User.entity';
import { DateEntity } from '../../config/date.entity';

@Entity()
export class Account extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  public idAccount: string;

  @Column({ type: 'varchar', length: 45, nullable: false })
  public email: string;

  @Column({ type: 'text', nullable: false })
  public password: string;

  @Column({ type: 'boolean', default: false })
  public isActivate: boolean;

  @ManyToOne(
    () => RulesAccount,
    (rulesAccount) => rulesAccount.idRulesAccount,
    { nullable: false },
  )
  public rulesAccount: RulesAccount;

  @OneToOne(() => User)
  @JoinColumn()
  public user: User;
}
