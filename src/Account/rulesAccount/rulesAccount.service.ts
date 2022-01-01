import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RulesAccount } from './rulesAccount.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRulesDto } from './createRules.dto';

@Injectable()
export class RulesAccountService {
  constructor(
    @InjectRepository(RulesAccount)
    private rulesAccount: Repository<RulesAccount>,
  ) {}

  public async createRules(rules: CreateRulesDto): Promise<CreateRulesDto> {
    try {
      const rulesAccount = this.rulesAccount.create(rules);
      await this.rulesAccount.save(rulesAccount);
      return rules;
    } catch (e) {
      throw e;
    }
  }

  public async findByName(rule: string): Promise<RulesAccount> {
    try {
      const getRule = await this.rulesAccount.findOne({ rule });
      return getRule;
    } catch (e) {
      throw e;
    }
  }
}
