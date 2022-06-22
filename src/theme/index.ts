import type { Theme as NavigationTheme } from '@react-navigation/native';
import type { ColorSchemeName } from 'react-native';
import { Dimensions, Platform } from 'react-native';
import { createStyleBuilder } from 'react-native-zephyr';
import type { EdgeInsets } from 'react-native-safe-area-context';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import type { Colors } from './colors';
import { darkColors, lightColors } from './colors';
import type { Scale } from './spacing';
import { scale } from './spacing';

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
  scale: Scale;
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
    scale,
    colors: scheme === 'light' ? lightColors : darkColors,
    device: {
      insets: {
        ...insets,
        bottom:
          insets.bottom + Platform.select({ ios: 0, default: scale.medium }),
      },
      width,
      height,
    },
  },
  navigationTheme: scheme === 'light' ? darkNavigation : lightNavigation,
});

export { width, height };

export const { styles, useStyles, makeStyledComponent } = createStyleBuilder({
  baseFontSize: 16,
  extraHandlers: {
    safe: (value: 'top' | 'bottom' | 'y') => {
      const { insets } = initialWindowMetrics ?? {
        insets: { top: 0, bottom: 0 },
      };

      return {
        paddingTop: ['top', 'y'].includes(value) ? insets.top : 0,
        paddingBottom: ['bottom', 'y'].includes(value)
          ? insets.bottom + Platform.select({ ios: 0, default: 16 })
          : 0,
      };
    },
  },
});
