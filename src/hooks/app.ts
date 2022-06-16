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
