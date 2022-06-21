import { memo } from 'react';
import type { ButtonProps } from './styles';
import { Container, Inner, Pressable } from './styles';
import { Icon, Text } from '@app/components';

export const Button = memo<ButtonProps>(
  ({ innerStyle, onPress, style, label, isFirst, isLast }) => (
    <Container style={style} isFirst={isFirst} isLast={isLast}>
      <Pressable onPress={onPress} enabled={!!onPress} style={innerStyle}>
        <Inner accessible accessibilityRole="button">
          <Text font="callout">{label}</Text>
          {onPress ? <Icon name="chevronRight" /> : null}
        </Inner>
      </Pressable>
    </Container>
  ),
);
