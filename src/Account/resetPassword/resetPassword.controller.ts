import {
  BadRequestException,
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ForgetPasswordAction } from './actions/forgetPassword.action';
import { VerifyTokenKeyAction } from './actions/verifyTokenKey.action';

@Controller('resetPassword')
export class ResetPasswordController {
  constructor(
    private forgetPasswordAction: ForgetPasswordAction,
    private verifyTokenKeyAction: VerifyTokenKeyAction,
  ) {}

  @ApiResponse({ status: 200, description: 'return object resetPassword' })
  @ApiResponse({ status: 404, description: 'throw error when 0 user found' })
  @ApiResponse({ status: 400, description: 'throw error if key exist already' })
  @Get('/forgetPassword?:email')
  async forgetPassword(@Query('email') email: string) {
    try {
      const forget = await this.forgetPasswordAction.exec(email);
      return forget;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  @ApiResponse({ status: 200, description: 'return object disable' })
  @ApiResponse({
    status: 404,
    description: 'throw error when key or token not found',
  })
  @ApiResponse({ status: 400, description: 'throw error' })
  @Post('/forgetPassword/:tokenLink')
  async checkKeyResetPassword(
    @Param('tokenLink') tokenLink: string,
    @Body('key') key: string,
  ) {
    try {
      const verifyKey = await this.verifyTokenKeyAction.exec(tokenLink, key);
      return verifyKey;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
