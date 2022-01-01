import { Module } from '@nestjs/common';
import { RulesAccountService } from './rulesAccount.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RulesAccount } from './rulesAccount.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RulesAccount])],
  providers: [RulesAccountService],
  exports: [RulesAccountService],
})
export class RulesAccountModule {}
