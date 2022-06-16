import type { RootStackParamList } from '@app/types';
import type { NavigationContainerRef } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationTheme, buildTheme } from '@app/theme';
import { forwardRef, useMemo } from 'react';
import { ThemeProvider } from '@emotion/react';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SheetNavigator } from './sheet';

export const Navigation = forwardRef<
  NavigationContainerRef<RootStackParamList>,
  { onReady: () => void }
>(({ onReady }, ref) => {
  const insets = useSafeAreaInsets();
  const theme = useMemo(() => buildTheme(insets), [insets]);

  return (
    <NavigationContainer ref={ref} onReady={onReady} theme={navigationTheme}>
      <ThemeProvider theme={theme}>
        <StatusBar />
        <SheetNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
});
