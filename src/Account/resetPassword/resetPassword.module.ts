import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResetPasswordService } from './resetPassword.service';
import { ResetPasswordController } from './resetPassword.controller';
import { ForgetPasswordAction } from './actions/forgetPassword.action';
import { UtilsModule } from '../../utils/utils.module';
import { ResetPassword } from './resetPassword.entity';
import { AccountModule } from '../account/account.module';
import { VerifyTokenKeyAction } from './actions/verifyTokenKey.action';

@Module({
  imports: [
    TypeOrmModule.forFeature([ResetPassword]),
    UtilsModule,
    AccountModule,
  ],
  controllers: [ResetPasswordController],
  providers: [ResetPasswordService, ForgetPasswordAction, VerifyTokenKeyAction],
})
export class ResetPasswordModule {}
