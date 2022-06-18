import { Text as RNText } from 'react-native';
import { create } from 'react-native-primitives';

export const Text = create(RNText, {
  base: {
    fontFamily: 'Inter_400Regular',
  },
  variants: {
    font: {
      largeTitle: {
        fontSize: 34,
        lineHeight: 41,
      },
      title: {
        fontSize: 28,
        lineHeight: 34,
      },
      title2: {
        fontSize: 22,
        lineHeight: 28,
      },
      title3: {
        fontSize: 20,
        lineHeight: 25,
      },
      headline: {
        fontSize: 17,
        lineHeight: 22,
        fontFamily: 'Inter_600SemiBold',
      },
      body: {
        fontSize: 17,
        lineHeight: 22,
      },
      callout: {
        fontSize: 16,
        lineHeight: 21,
      },
      subheadline: {
        fontSize: 15,
        lineHeight: 20,
      },
      footnote: {
        fontSize: 13,
        lineHeight: 18,
      },
      caption: {
        fontSize: 12,
        lineHeight: 16,
      },
      caption2: {
        fontSize: 11,
        lineHeight: 13,
      },
    },
    color: {
      white: {
        color: '#FFFFFF',
      },
      black: {
        color: '#000000',
      },
    },
    weight: {
      '100': {
        fontFamily: 'Inter_100Thin',
      },
      '200': {
        fontFamily: 'Inter_200ExtraLight',
      },
      '300': {
        fontFamily: 'Inter_300Light',
      },
      '400': {
        fontFamily: 'Inter_400Regular',
      },
      '500': {
        fontFamily: 'Inter_500Medium',
      },
      '600': {
        fontFamily: 'Inter_600SemiBold',
      },
      '700': {
        fontFamily: 'Inter_700Bold',
      },
      '800': {
        fontFamily: 'Inter_800ExtraBold',
      },
      '900': {
        fontFamily: 'Inter_900Black',
      },
    },
  },
});

Text.defaultProps = {
  font: 'body',
  color: 'white',
};
