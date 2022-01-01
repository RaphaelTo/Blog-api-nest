import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAccountDto } from './dto/create-account.dto';

import { SignupAction } from './actions/signup.action';
import { SigninDto } from './dto/signin.dto';
import { SigninAction } from './actions/signin.action';

//When we use personalize provide, use decorator Inject()

@ApiTags('Account')
@Controller('account')
export class AccountController {
  constructor(
    private readonly signUpAction: SignupAction,
    @Inject('SIGNIN') private readonly signInAction: SigninAction,
  ) {}

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

  @ApiResponse({
    status: 200,
    description: 'return an object with success connection',
  })
  @ApiResponse({ status: 400, description: 'throw error 400' })
  @ApiBody({
    description: 'Il devra comprendre les champs du DTO',
    type: SigninDto,
  })
  @HttpCode(200)
  @Post('signin')
  public async signin(@Body() accountBody: SigninDto) {
    try {
      const login = await this.signInAction.signin(accountBody);
      return login;
    } catch (e) {
      throw e;
    }
  }
}
