import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Account } from '../Account/account/account.entity';
import { RulesAccount } from '../Account/rulesAccount/rulesAccount.entity';

type payload = { idAccount: string; rulesAccount: Partial<RulesAccount> };

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET,
    });
  }

  validate(payload: Partial<Account>): payload {
    return { idAccount: payload.idAccount, rulesAccount: payload.rulesAccount };
  }
}
