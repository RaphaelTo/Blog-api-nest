import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

import { UserModule } from './user/user.module';
import { AccountModule } from './account/account.module';
import { RulesAccountModule } from './rulesAccount/rulesAccount.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot(),
    UserModule,
    AccountModule,
    RulesAccountModule,
  ],
})
export class AppModule {}
