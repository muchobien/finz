import { DatabaseContext, TabbarContext } from '@app/providers';
import { useContext } from 'react';

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (context === undefined) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
};

export const useTabbar = () => {
  const context = useContext(TabbarContext);
  if (context === undefined) {
    throw new Error('useTabbar must be used within a TabbarProvider');
  }
  return context;
};
