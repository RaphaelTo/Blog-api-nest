import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Account } from '../Account/account/account.entity';
import { Article } from '../Article/article/article.entity';
import { Category } from '../Article/category/category.entity';
import { Comment } from '../Article/comment/comment.entity';
import { CommentRecursive } from '../Article/commentRecursive/commentRecursive.entity';
import { OldPassword } from '../Account/oldPassword/oldPassword.entity';
import { Rank } from '../Article/rank/rank.entity';
import { ResetPassword } from '../Account/resetPassword/resetPassword.entity';
import { RulesAccount } from '../Account/rulesAccount/rulesAccount.entity';
import { Tag } from '../Article/tag/tag.entity';
import { User } from '../Account/user/User.entity';

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
