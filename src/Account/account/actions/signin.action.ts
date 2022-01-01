import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AccountService } from '../account.service';
import { SigninDto } from '../dto/signin.dto';
import { AuthService } from '../../../auth/auth.service';

type tokenResponse = { 'access-token': string };

@Injectable()
export class SigninAction {
  constructor(
    private accountService: AccountService,
    private readonly authService: AuthService,
  ) {}

  public async signin(accountParam: SigninDto): Promise<tokenResponse> {
    try {
      const account = await this.accountService.findAccountByEmailWithRules(
        accountParam.email,
      );
      if (!account) {
        throw new NotFoundException('account doesnt exist');
      }

      if (!account.isActivate) {
        throw new ForbiddenException('account isn t activate');
      }

      const isGoodPassword = await this._checkPassword(
        accountParam.password,
        account.password,
      );

      if (!isGoodPassword) {
        throw new ForbiddenException('bad password');
      }
      const token = await this.authService.login({
        idAccount: account.idAccount,
        rulesAccount: account.rulesAccount,
      });

      return token;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  private async _checkPassword(
    notHashPassword: string,
    hashPassword: string,
  ): Promise<boolean> {
    try {
      const isGoodPassword = await bcrypt.compare(
        notHashPassword,
        hashPassword,
      );
      return isGoodPassword;
    } catch (e) {
      throw e;
    }
  }
}
