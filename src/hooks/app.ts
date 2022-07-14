import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { datasource } from '@app/services';
import { Account, Category, Transaction } from '@app/models';

export const useApp = () => {
  const [ready, setReady] = useState(false);

  const handleReady = useCallback(async () => {
    if (ready) {
      await SplashScreen.hideAsync();
    }
  }, [ready]);

  const setUp = useCallback(async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
      });
      if (!datasource.isInitialized) {
        await datasource.initialize();
        const category = Category.new({
          name: 'Category',
          color: '#000000',
        });
        await category.save();

        const account = Account.new({
          name: 'Account',
          color: '#000000',
        });

        await account.save();

        const transaction = Transaction.new({
          name: 'Transaction',
          amount: 12.23,
          account,
          category,
        });

        await transaction.save();
      }
    } catch (err) {
      console.log(err);
      // noop
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    setUp();
  }, [setUp]);

  return {
    handleReady,
    ready,
  };
};
