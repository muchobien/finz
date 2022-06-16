import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  type Relation,
} from 'typeorm';
import { Account } from './account';
import { Category } from './category';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  amount!: number;

  @ManyToOne(() => Account, account => account.transactions)
  account!: Relation<Account>;

  @ManyToOne(() => Category, category => category.transactions)
  category!: Relation<Category>;
}
