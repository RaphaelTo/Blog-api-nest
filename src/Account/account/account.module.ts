import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { RulesAccountModule } from '../rulesAccount/rulesAccount.module';
import { Account } from './account.entity';
import { RulesAccount } from '../rulesAccount/rulesAccount.entity';
import { User } from '../user/User.entity';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { SignupAction } from './actions/signup.action';
import { SigninAction } from './actions/signin.action';
import { AuthModule } from '../../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account, RulesAccount, User]),
    UserModule,
    RulesAccountModule,
    AuthModule,
  ],
  controllers: [AccountController],
  providers: [
    AccountService,
    SignupAction,
    {
      provide: 'SIGNIN',
      useClass: SigninAction,
    },
  ],
  exports: [AccountService],
})
export class AccountModule {}
