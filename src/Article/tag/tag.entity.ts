import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DateEntity } from '../../config/date.entity';
import { Article } from '../article/article.entity';

@Entity()
export class Tag extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  public idTag: string;

  @Column({ type: 'varchar', length: 45, nullable: false })
  public tag: string;

  @ManyToMany(() => Article, (article) => article.tag, { nullable: false })
  public article: Article[];
}
