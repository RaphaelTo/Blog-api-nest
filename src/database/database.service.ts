import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Account } from '../account/account.entity';
import { Article } from '../article/article.entity';
import { Category } from '../category/category.entity';
import { Comment } from '../comment/comment.entity';
import { CommentRecursive } from '../commentRecursive/commentRecursive.entity';
import { OldPassword } from '../oldPassword/oldPassword.entity';
import { Rank } from '../rank/rank.entity';
import { ResetPassword } from '../resetPassword/resetPassword.entity';
import { RulesAccount } from '../rulesAccount/rulesAccount.entity';
import { Tag } from '../tag/tag.entity';
import { User } from '../user/User.entity';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT!,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [
        Account,
        Article,
        Category,
        Comment,
        CommentRecursive,
        OldPassword,
        Rank,
        ResetPassword,
        RulesAccount,
        Tag,
        User,
      ],
      synchronize: true,
    };
  }
}
