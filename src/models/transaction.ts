import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  type Relation,
  BaseEntity,
} from 'typeorm';
import type { Account } from './account';
import type { Category } from './category';

@Entity()
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  amount!: number;

  @ManyToOne<Account>('Account', account => account.transactions)
  account!: Relation<Account>;

  @ManyToOne<Category>('Category', category => category.transactions)
  category!: Relation<Category>;

  static new(
    fields: Pick<Transaction, 'name' | 'amount' | 'account' | 'category'>,
  ): Transaction {
    const transaction = new Transaction();
    Object.assign(transaction, fields);
    return transaction;
  }
}
