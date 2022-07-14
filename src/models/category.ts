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
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  color!: string;

  @OneToMany<Transaction>('Transaction', transaction => transaction.category)
  transactions!: Relation<Transaction[]>;

  static new(fields: Pick<Category, 'name' | 'color'>): Category {
    const category = new Category();
    Object.assign(category, fields);
    return category;
  }
}
