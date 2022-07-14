import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  type Relation,
  BaseEntity,
} from 'typeorm';
import type { Transaction } from './transaction';

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  color!: string;

  @OneToMany<Transaction>('Transaction', transaction => transaction.account)
  transactions!: Relation<Transaction[]>;

  static new(fields: Pick<Account, 'name' | 'color'>): Account {
    const account = new Account();
    Object.assign(account, fields);
    return account;
  }
}
