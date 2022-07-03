import { useTabbar } from '@app/hooks';
import { useStyles } from '@app/theme';
import type { ContentStyle } from '@shopify/flash-list';
import { useMemo } from 'react';

export const useConnect = () => {
  const { height: tabbarHeight } = useTabbar();
  const { paddingBottom } = useStyles({
    classes: ['pb:4'],
  });

  const contentContainerStyle = useMemo<ContentStyle>(
    () => ({
      paddingBottom: tabbarHeight + paddingBottom,
    }),
    [tabbarHeight, paddingBottom],
  );

  return {
    contentContainerStyle,
    tabbarHeight,
  };
};
