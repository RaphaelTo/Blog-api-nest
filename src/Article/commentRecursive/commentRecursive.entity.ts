import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DateEntity } from '../../config/date.entity';
import { Article } from '../article/article.entity';

@Entity()
export class CommentRecursive extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  public idCommentRecursive: string;

  @ManyToOne(
    () => CommentRecursive,
    (commentRecursive) => commentRecursive.idCommentRecursive,
    { nullable: true },
  )
  public idParent: CommentRecursive;

  @ManyToOne(() => Article, (article) => article.idArticle)
  public article: Article;
}
