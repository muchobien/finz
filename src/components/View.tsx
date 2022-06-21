import { create } from 'react-native-primitives';
import { View as RNView } from 'react-native';
import { scale } from '@app/theme/spacing';
import { SafeAreaView } from 'react-native-safe-area-context';

const Horizontal = create(RNView, {
  base: {
    flex: 1,
  },
  variants: {
    size: {
      micro: { width: scale.micro, flex: 0 },
      tiny: { width: scale.tiny, flex: 0 },
      small: { width: scale.small, flex: 0 },
      medium: { width: scale.medium, flex: 0 },
      large: { width: scale.large, flex: 0 },
      xl: { width: scale.xl, flex: 0 },
    },
  },
});

const Vertical = create(RNView, {
  base: {
    flex: 1,
  },
  variants: {
    size: {
      micro: { height: scale.micro, flex: 0 },
      tiny: { height: scale.tiny, flex: 0 },
      small: { height: scale.small, flex: 0 },
      medium: { height: scale.medium, flex: 0 },
      large: { height: scale.large, flex: 0 },
      xl: { height: scale.xl, flex: 0 },
    },
  },
});

export const Spacer = {
  Vertical,
  Horizontal,
};

const Safe = create(SafeAreaView, {
  base: {
    flex: 1,
  },
  props: {
    edges: ['top', 'bottom'],
    mode: 'padding',
  },
});

export const View = {
  Safe,
};
