import type { WithStyle } from '@app/types';
import styled from '@emotion/native';
import { RectButton } from 'react-native-gesture-handler';

export type ButtonProps = WithStyle<
  {
    onPress?: () => void;
    isFirst?: boolean;
    isLast?: boolean;
    label: string;
  },
  'style' | 'innerStyle'
>;

type StyledProps = Pick<ButtonProps, 'isFirst' | 'isLast'>;

export const Container = styled.View<StyledProps>(
  ({ isFirst, isLast, theme }) => ({
    overflow: 'hidden',
    backgroundColor: theme.colors.gray6,
    ...(isFirst && {
      borderTopLeftRadius: theme.scale['2.5'],
      borderTopRightRadius: theme.scale['2.5'],
    }),
    ...(isLast && {
      borderBottomLeftRadius: theme.scale['2.5'],
      borderBottomRightRadius: theme.scale['2.5'],
    }),
  }),
);

export const Inner = styled.View(({ theme }) => ({
  flexGrow: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.scale['3.5'],
}));

export const Pressable = styled(RectButton)`
  flex-grow: 1;
`;
