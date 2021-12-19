import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class DateEntity {
  @CreateDateColumn({ type: 'datetime' })
  public createAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  public updateAt: Date;
}
