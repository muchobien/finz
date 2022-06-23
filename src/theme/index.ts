import type { Theme as NavigationTheme } from '@react-navigation/native';
import { useColorScheme, Platform } from 'react-native';
import { createStyleBuilder, extractTwColor } from 'react-native-zephyr';
import { initialWindowMetrics } from 'react-native-safe-area-context';
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

export const useNavigationTheme = () => {
  const scheme = useColorScheme();

  return scheme !== 'light' ? darkNavigation : lightNavigation;
};

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
  extendTheme: {
    colors: {
      surface: 'rgb(249, 249, 249)',
      surfaceDark: 'rgb(1, 1, 1)',
      ...extractTwColor({ twColor: 'trueGray', name: 'neutral' }),
      ...extractTwColor({ twColor: 'gray', name: 'zinc' }),
      ...extractTwColor({ twColor: 'violet', name: 'violet' }),
      ...extractTwColor({ twColor: 'emerald', name: 'emerald' }),
      ...extractTwColor({ twColor: 'rose', name: 'rose' }),
    },
  },
});
