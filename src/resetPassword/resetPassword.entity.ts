import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { DateEntity } from '../config/date.entity';

@Entity()
export class ResetPassword extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  public idResetPassword: string;

  @Column({ type: 'varchar', length: 4 })
  public key: string;

  @Column({ type: 'boolean', nullable: false })
  public isEnable: boolean;
}
