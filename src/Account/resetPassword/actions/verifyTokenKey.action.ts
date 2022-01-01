import { Injectable, NotFoundException } from '@nestjs/common';
import { ResetPasswordService } from '../resetPassword.service';
import { UpdateResult } from 'typeorm';

@Injectable()
export class VerifyTokenKeyAction {
  constructor(private resetPasswordService: ResetPasswordService) {}

  async exec(tokenLink: string, key: string): Promise<UpdateResult> {
    try {
      const resetPassword =
        await this.resetPasswordService.findByTokenLinkAndKey(tokenLink, key);
      if (!resetPassword) {
        throw new NotFoundException('key or token not found');
      }

      const disableResetPassword = await this.resetPasswordService.update(
        { isEnable: false },
        { idResetPassword: resetPassword.idResetPassword },
      );

      return disableResetPassword;
    } catch (e) {
      throw e;
    }
  }
}
