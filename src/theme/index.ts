import type { Theme as NavigationTheme } from '@react-navigation/native';
import type { ColorSchemeName } from 'react-native';
import { Dimensions, Platform } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';
import type { Colors } from './colors';
import { darkColors, lightColors } from './colors';

const darkNavigation: NavigationTheme = {
  dark: true,
  colors: {
    background: darkColors.black,
    primary: darkColors.indigo,
    border: darkColors.gray,
    card: darkColors.black,
    notification: darkColors.indigo,
    text: darkColors.white,
  },
};

const lightNavigation: NavigationTheme = {
  dark: false,
  colors: {
    background: lightColors.white,
    primary: lightColors.indigo,
    border: lightColors.gray,
    card: lightColors.white,
    notification: lightColors.indigo,
    text: lightColors.black,
  },
};

export type AppTheme = {
  colors: Colors;
  device: {
    insets: EdgeInsets;
    width: number;
    height: number;
  };
};

const { width, height } = Dimensions.get('window');

export const buildTheme = (
  insets: EdgeInsets,
  scheme: ColorSchemeName,
): { theme: AppTheme; navigationTheme: NavigationTheme } => ({
  theme: {
    colors: scheme === 'light' ? lightColors : darkColors,
    device: {
      insets: {
        ...insets,
        bottom: insets.bottom + Platform.select({ ios: 0, default: 20 }),
      },
      width,
      height,
    },
  },
  navigationTheme: scheme === 'light' ? darkNavigation : lightNavigation,
});

export { width, height };
