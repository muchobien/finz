import { useTabbar } from '@app/hooks';
import { useStyles } from '@app/theme';
import { useMemo } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export const useConnect = () => {
  const { height: tabbarHeight } = useTabbar();
  const { paddingBottom, paddingHorizontal } = useStyles({
    classes: ['pb:4', 'px:4'],
  });

  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      paddingBottom: tabbarHeight + paddingBottom,
      paddingHorizontal,
    }),
    [tabbarHeight, paddingBottom, paddingHorizontal],
  );

  return {
    contentContainerStyle,
    tabbarHeight,
  };
};
