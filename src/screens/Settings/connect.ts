import { useTabbar } from '@app/hooks';
import { useTheme } from '@emotion/react';
import { useMemo } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export const useConnect = () => {
  const { height: tabbarHeight } = useTabbar();
  const { scale } = useTheme();

  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      paddingBottom: tabbarHeight,
      paddingHorizontal: scale.medium,
    }),
    [tabbarHeight, scale],
  );

  return {
    contentContainerStyle,
  };
};
