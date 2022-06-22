import type { RootStackParamList } from '@app/types';
import type { NavigationContainerRef } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigationTheme } from '@app/theme';
import { forwardRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SheetNavigator } from './sheet';
import { StyleProvider } from 'react-native-zephyr';

export const Navigation = forwardRef<
  NavigationContainerRef<RootStackParamList>,
  { onReady: () => void }
>(({ onReady }, ref) => {
  const navigationTheme = useNavigationTheme();

  return (
    <NavigationContainer ref={ref} onReady={onReady} theme={navigationTheme}>
      <StyleProvider>
        <StatusBar />
        <SheetNavigator />
      </StyleProvider>
    </NavigationContainer>
  );
});
