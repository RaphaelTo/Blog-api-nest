import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

import { UserModule } from './Account/user/user.module';
import { AccountModule } from './Account/account/account.module';
import { RulesAccountModule } from './Account/rulesAccount/rulesAccount.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot(),
    UserModule,
    AccountModule,
    RulesAccountModule,
    AuthModule,
  ],
})
export class AppModule {}
