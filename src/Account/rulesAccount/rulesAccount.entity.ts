import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DateEntity } from '../../config/date.entity';

@Entity()
export class RulesAccount extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  public idRulesAccount: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  public rule: string;
}
