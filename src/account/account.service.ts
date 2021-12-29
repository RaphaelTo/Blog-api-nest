import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account) private accountRepository: Repository<Account>,
  ) {}

  public async createAccount(account: Account): Promise<Partial<Account>> {
    try {
      const addAccount = this.accountRepository.create(account);

      await this.accountRepository.save(addAccount);
      return account;
    } catch (e) {
      throw e;
    }
  }

  public async findOneBy<T>(account: T): Promise<Account> {
    try {
      const findAccount = await this.accountRepository.findOne(account);
      return findAccount;
    } catch (e) {
      throw e;
    }
  }
}
