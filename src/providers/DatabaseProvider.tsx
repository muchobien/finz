import type { FC } from 'react';
import React, { createContext, useMemo } from 'react';
import type { DataSource } from 'typeorm';
import { datasource } from '@app/services';

type DatabaseContextValue = {
  datasource: DataSource;
};

export const DatabaseContext = createContext<DatabaseContextValue>(
  {} as DatabaseContextValue,
);

export const DataBaseProvider: FC = ({ children }) => {
  const value = useMemo<DatabaseContextValue>(() => ({ datasource }), []);

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
};
