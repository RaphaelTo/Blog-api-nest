import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class RulesAccount {
  @PrimaryGeneratedColumn('uuid')
  public idRulesAccount: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  public rule: string;

  @CreateDateColumn({ type: 'datetime' })
  public createAt: string;

  @UpdateDateColumn({ type: 'datetime' })
  public updateAt: Date;
}
