import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class DateEntity {
  @CreateDateColumn({ type: 'timestamp with time zone' })
  public createAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  public updateAt: Date;
}
