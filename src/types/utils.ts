import type { StyleProp, ViewStyle } from 'react-native';

export type KeysOfType<O, T> = {
  [K in keyof O]: O[K] extends T ? K : never;
}[keyof O];

type Key = `${string}Style` | 'style';

export type WithStyle<
  T extends Record<string, unknown>,
  K extends Key = 'style',
> = T & {
  // eslint-disable-next-line no-unused-vars
  [key in K]?: StyleProp<ViewStyle>;
};
