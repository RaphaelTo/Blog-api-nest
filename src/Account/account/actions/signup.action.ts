import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AccountService } from '../account.service';
import { UserService } from '../../user/user.service';
import { RulesAccountService } from '../../rulesAccount/rulesAccount.service';
import { User } from '../../user/User.entity';
import { Account } from '../account.entity';
import { CreateAccountDto } from '../dto/create-account.dto';

type findOneByEmail = { email: string };

@Injectable()
export class SignupAction {
  constructor(
    private readonly accountService: AccountService,
    private readonly userService: UserService,
    private readonly rulesAccountService: RulesAccountService,
  ) {}

  public async signup(
    accountBody: CreateAccountDto,
  ): Promise<CreateAccountDto> {
    try {
      const rules = this.rulesAccountService.findByName('admin');
      const user = this._createUser(accountBody);
      const isExistAccount = this._checkAccountExist(accountBody.email);
      const hashPassword = this._hashPassword(accountBody.password);
      const asyncAction = await Promise.all([
        rules,
        user,
        isExistAccount,
        hashPassword,
      ]);

      if (asyncAction[2]) {
        throw new BadRequestException('this account exist');
      }

      const account = new Account();
      account.email = accountBody.email;
      account.password = asyncAction[3];
      account.user = asyncAction[1];
      account.rulesAccount = asyncAction[0];

      await this.accountService.createAccount(account);
      return accountBody;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  private async _checkAccountExist(email: string): Promise<boolean> {
    try {
      const checkAccount = await this.accountService.findOneBy<findOneByEmail>({
        email,
      });

      return !!checkAccount;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  private async _hashPassword(toHash: string): Promise<string> {
    try {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(toHash, salt);
      return hash;
    } catch (e) {
      throw e;
    }
  }

  private async _createUser(paramUser: Partial<User>): Promise<User> {
    try {
      const user = await this.userService.create({
        firstname: paramUser.firstname,
        lastname: paramUser.lastname,
        birthday: paramUser.birthday,
        profilPicture: paramUser.profilPicture,
      });
      return user;
    } catch (e) {
      throw e;
    }
  }
}
