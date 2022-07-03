import { memo } from 'react';
import { Icon, Styled, styled } from '@app/components';

export type ButtonProps = {
  onPress?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  label: string;
};

const Pressable = styled.RectButton('flex:grow');
const Inner = styled.View(
  'flex:grow',
  'flex:row',
  'items:center',
  'justify:between',
  'p:4',
);

const Label = styled.Text('color:white', 'text:base');

export const Button = memo<ButtonProps>(
  ({ onPress, label, isFirst, isLast }) => (
    <Styled.View
      classes={[
        'overflow:hidden',
        'bg:zinc-900',
        'mx:4',
        isFirst && 'rounded-t:xl',
        isLast && 'rounded-b:xl',
      ]}>
      <Pressable onPress={onPress} enabled={!!onPress}>
        <Inner accessible accessibilityRole="button">
          <Label>{label}</Label>
          {onPress ? <Icon name="chevronRight" /> : null}
        </Inner>
      </Pressable>
    </Styled.View>
  ),
);
