import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ForgetPasswordAction } from './actions/forgetPassword.action';

@Controller('resetPassword')
export class ResetPasswordController {
  constructor(private forgetPasswordAction: ForgetPasswordAction) {}

  @ApiResponse({ status: 200, description: 'return all user' })
  @ApiResponse({ status: 404, description: 'throw error when 0 user found' })
  @Get('/forgetPassword?:email')
  async forgetPassword(@Query('email') email: string) {
    try {
      const forget = await this.forgetPasswordAction.exec(email);
      return forget;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
