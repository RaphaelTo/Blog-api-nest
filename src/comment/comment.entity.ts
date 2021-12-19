import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DateEntity } from '../config/date.entity';
import { CommentRecursive } from '../commentRecursive/commentRecursive.entity';

@Entity()
export class Comment extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  public idComment: string;

  @Column({ type: 'text', nullable: false })
  public content: string;

  @ManyToOne(
    () => CommentRecursive,
    (cmRecursive) => cmRecursive.idCommentRecursive,
  )
  public commentRecursive: CommentRecursive;
}
