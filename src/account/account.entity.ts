import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { RulesAccount } from '../rulesAccount/rulesAccount.entity';
import { User } from '../user/User.entity';

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

  @ManyToOne(() => RulesAccount, (rulesAccount) => rulesAccount.idRulesAccount)
  public rulesAccount: RulesAccount;

  @ManyToOne(() => User, (user) => user.idUser)
  public user: User;
}
