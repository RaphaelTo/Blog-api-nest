import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../category/category.entity';
import { Account } from '../../Account/account/account.entity';
import { Tag } from '../tag/tag.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn('uuid')
  public idArticle: string;

  @Column({ type: 'varchar', length: 45, nullable: false })
  public title: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  public description: string;

  @Column({ type: 'text', nullable: false })
  public content: string;

  @ManyToOne(() => Category, (category) => category.idCategory, {
    nullable: false,
  })
  public category: string;

  @ManyToOne(() => Account, (account) => account.idAccount, { nullable: false })
  public account: string;

  @ManyToMany(() => Tag, (tag) => tag.article)
  public tag: Tag[];
}
