import { memo } from 'react';
import { Icon, Styled } from '@app/components';

export type ButtonProps = {
  onPress?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  label: string;
};

export const Button = memo<ButtonProps>(
  ({ onPress, label, isFirst, isLast }) => (
    <Styled.View
      classes={[
        'overflow:hidden',
        'bg:gray-900',
        isFirst && 'rounded-t:xl',
        isLast && 'rounded-b:xl',
      ]}>
      <Styled.RectButton
        classes={['flex:grow']}
        onPress={onPress}
        enabled={!!onPress}>
        <Styled.View
          accessible
          accessibilityRole="button"
          classes={[
            'flex:grow',
            'flex:row',
            'items:center',
            'justify:between',
            'p:4',
          ]}>
          <Styled.Text classes={['color:white', 'text:base']}>
            {label}
          </Styled.Text>
          {onPress ? <Icon name="chevronRight" /> : null}
        </Styled.View>
      </Styled.RectButton>
    </Styled.View>
  ),
);
