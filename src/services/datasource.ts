import { Account, Category, Transaction } from '@app/models';
import { DataSource } from 'typeorm';

export const datasource = new DataSource({
  type: 'react-native',
  database: 'finz',
  location: '.',
  entities: [Account, Transaction, Category],
  synchronize: true,
  logging: true,
});
