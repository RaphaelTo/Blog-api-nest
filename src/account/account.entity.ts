import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { RulesAccount } from '../rulesAccount/rulesAccount.entity';
import { User } from '../user/User.entity';
import { DateEntity } from '../config/date.entity';

@Entity()
export class Account extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  public idAccount: string;

  @Column({ type: 'varchar', length: 45 })
  public email: string;

  @Column({ type: 'varchar', length: 45 })
  public password: string;

  @Column({ type: 'boolean' })
  public isActivate: boolean;

  @ManyToOne(() => RulesAccount, (rulesAccount) => rulesAccount.idRulesAccount)
  public rulesAccount: RulesAccount;

  @ManyToOne(() => User, (user) => user.idUser)
  public user: User;
}
