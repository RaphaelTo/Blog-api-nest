import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './account.entity';
import { RulesAccount } from '../rulesAccount/rulesAccount.entity';
import { RulesAccountService } from '../rulesAccount/rulesAccount.service';
import { UserService } from '../user/user.service';
import { User } from '../user/User.entity';
import { SignupAction } from './actions/signup.action';

@Module({
  imports: [TypeOrmModule.forFeature([Account, RulesAccount, User])],
  controllers: [AccountController],
  providers: [AccountService, RulesAccountService, UserService, SignupAction],
})
export class AccountModule {}
