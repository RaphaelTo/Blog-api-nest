import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { ResetPasswordService } from '../resetPassword.service';
import { UtilsService } from '../../../utils/utils.service';
import { AccountService } from '../../account/account.service';
import { Account } from '../../account/account.entity';
import { randomUUID } from 'crypto';
import { ResetPassword } from '../resetPassword.entity';

type email = { email: string };

@Injectable()
export class ForgetPasswordAction {
  constructor(
    private readonly resetPasswordService: ResetPasswordService,
    private readonly utilsService: UtilsService,
    private readonly accountService: AccountService,
  ) {}

  async exec(emailParam: string): Promise<Partial<ResetPassword>> {
    try {
      const account: Account = await this.accountService.findOneBy<email>({
        email: emailParam,
      });

      if (!account) {
        throw new NotFoundException('user doesnt exist');
      }
      const checkResetPasword = await this._checkExistResetPassword(
        account.idAccount,
      );

      if (checkResetPasword) {
        throw new BadRequestException('key exist already');
      }

      const tokenLink: string = randomUUID();
      const key: string = this.utilsService.generateKey();

      const resetPassword = new ResetPassword();
      resetPassword.key = key;
      resetPassword.tokenLink = tokenLink;
      resetPassword.account = account;

      await this.resetPasswordService.createResetPassword(resetPassword);
      delete resetPassword.account;
      return resetPassword;
    } catch (e) {
      throw e;
    }
  }

  private async _checkExistResetPassword(idAccount: string): Promise<boolean> {
    try {
      const resetPasswords = await this.resetPasswordService.findAllByIdAccount(
        idAccount,
      );

      if (resetPasswords.length) {
        return true;
      }

      return false;
    } catch (e) {
      throw e;
    }
  }
}
