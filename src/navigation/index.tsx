import type { RootStackParamList } from '@app/types';
import type { NavigationContainerRef } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { buildTheme } from '@app/theme';
import { forwardRef, useMemo } from 'react';
import { ThemeProvider } from '@emotion/react';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SheetNavigator } from './sheet';
import { useColorScheme } from 'react-native';

export const Navigation = forwardRef<
  NavigationContainerRef<RootStackParamList>,
  { onReady: () => void }
>(({ onReady }, ref) => {
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();
  const { theme, navigationTheme } = useMemo(
    () => buildTheme(insets, scheme),
    [insets, scheme],
  );

  return (
    <NavigationContainer ref={ref} onReady={onReady} theme={navigationTheme}>
      <ThemeProvider theme={theme}>
        <StatusBar />
        <SheetNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
});
