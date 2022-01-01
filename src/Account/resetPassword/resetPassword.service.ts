import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResetPassword } from './resetPassword.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResetPasswordService {
  constructor(
    @InjectRepository(ResetPassword)
    private readonly resetPasswordRepository: Repository<ResetPassword>,
  ) {}

  async createResetPassword(rp: ResetPassword): Promise<ResetPassword> {
    try {
      const resetPassword = this.resetPasswordRepository.create(rp);
      await this.resetPasswordRepository.save(resetPassword);

      return rp;
    } catch (e) {
      throw e;
    }
  }

  async findAllByIdAccount(idAccount): Promise<ResetPassword[]> {
    try {
      const resetPassword = await this.resetPasswordRepository.find({
        select: ['tokenLink', 'key', 'isEnable'],
        where: { account: idAccount },
      });

      return resetPassword;
    } catch (e) {
      throw e;
    }
  }
}
