import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAccountDto } from './create-account.dto';

import { SignupAction } from './actions/signup.action';

@ApiTags('Account')
@Controller('account')
export class AccountController {
  constructor(private readonly signUpAction: SignupAction) {}

  @ApiResponse({ status: 201, description: 'return account added' })
  @ApiResponse({ status: 400, description: 'throw error 400' })
  @ApiBody({
    description: 'Il devra comprendre les champs du DTO',
    type: CreateAccountDto,
  })
  @Post('signup')
  public async signup(
    @Body() accountBody: CreateAccountDto,
  ): Promise<CreateAccountDto> {
    try {
      const generateAccount = await this.signUpAction.signup(accountBody);
      return generateAccount;
    } catch (e) {
      throw e;
    }
  }
}
