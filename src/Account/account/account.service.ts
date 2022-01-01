import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './account.entity';
import { Repository } from 'typeorm';
import { RulesAccount } from '../rulesAccount/rulesAccount.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account) private accountRepository: Repository<Account>,
  ) {}

  public async createAccount(accountParam: Account): Promise<Partial<Account>> {
    try {
      const account = this.accountRepository.create(accountParam);

      await this.accountRepository.save(account);
      return accountParam;
    } catch (e) {
      throw e;
    }
  }

  public async findOneBy<T>(accountParam: T): Promise<Account> {
    try {
      const account = await this.accountRepository.findOne(accountParam);
      return account;
    } catch (e) {
      throw e;
    }
  }

  public async findAccountByEmailWithRules(email: string): Promise<Account> {
    try {
      const account = await this.accountRepository
        .createQueryBuilder('a')
        .select([
          'a.idAccount',
          'a.email',
          'a.password',
          'a.isActivate',
          'ra.rule',
        ])
        .where('a.email = :email', { email })
        .leftJoin('a.rulesAccount', 'ra')
        .getOne();

      return account;
    } catch (e) {
      throw e;
    }
  }
}
