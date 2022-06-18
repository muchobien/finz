import styled, { css } from '@emotion/native';
import { Text } from '@app/components/Text';
import type { Theme } from '@emotion/react';
import type { RectButtonProps } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';
import { Platform } from 'react-native';
import BaseIcon from '@app/components/Icon';

export const variants = {
  primary: (theme: Theme) => css`
    background-color: ${theme.colors.indigo};
  `,
  outline: (theme: Theme) => css`
    background-color: transparent;
    border-width: 1px;
    border-color: ${theme.colors.indigo};
  `,
};

export type StyledProps = {
  variant: keyof typeof variants;
};

export const pressableDefaultProps: Record<
  StyledProps['variant'],
  RectButtonProps
> = {
  primary: {
    rippleColor: 'rgba(0, 0, 0, 0.22)',
    activeOpacity: 0.4,
  },
  outline: {
    rippleColor: 'rgba(107, 77, 255, 0.4)',
    underlayColor: 'rgb(107, 77, 255)',
    activeOpacity: 0.4,
  },
};

export const Container = styled.View<StyledProps>`
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  ${({ variant, theme }) => variants[variant](theme)}
`;

export const Inner = styled.View`
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text)``;

export const Pressable = styled(RectButton)`
  flex-grow: 1;
`;

export const Loader = styled.ActivityIndicator``;

Loader.defaultProps = {
  color: 'rgba(255, 255, 255, 0.7)',
  size: Platform.select({ android: 'large', default: 'small' }),
};

export const Decorator = styled.View({ paddingHorizontal: 16, width: 56 });

export const Center = styled.View({ flex: 1, alignItems: 'center' });

export const Icon = styled(BaseIcon)();
Icon.defaultProps = {
  filled: true,
};
