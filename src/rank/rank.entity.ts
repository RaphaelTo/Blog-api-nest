import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DateEntity } from '../config/date.entity';
import { Article } from '../article/article.entity';

@Entity()
export class Rank extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  public idRank: string;

  @Column({ type: 'smallint', nullable: false })
  public ranking: string;

  @ManyToOne(() => Article, (article) => article.idArticle, { nullable: false })
  public article: Article;
}
