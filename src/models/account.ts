import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  type Relation,
} from 'typeorm';
import { Transaction } from './transaction';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  color!: string;

  @OneToMany(() => Transaction, transaction => transaction.account)
  transactions!: Relation<Transaction[]>;
}
