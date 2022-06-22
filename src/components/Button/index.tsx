import type { ComponentProps } from 'react';
import React, { memo } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import type { IconName } from '@app/components/Icon/constants';
import { Styled } from '@app/components/styled';
import { Icon } from '@app/components/Icon';

export type ButtonProps = {
  title: string;
  onPress?: () => void;
  loading?: boolean;
  enabled?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
  classes?: ComponentProps<typeof Styled.View>['classes'];
  innerClasses?: ComponentProps<typeof Styled.View>['classes'];
};

export const Button = memo<ButtonProps>(
  ({
    title,
    loading = false,
    enabled = !loading,
    leftIcon,
    rightIcon,
    onPress,
    classes = [],
    innerClasses = [],
  }) => (
    <Styled.View
      classes={['overflow:hidden', 'h:12', 'rounded:lg', ...classes]}>
      <Styled.RectButton
        onPress={onPress}
        enabled={enabled}
        classes={['flex:grow']}>
        <Styled.View
          accessible
          accessibilityRole="button"
          classes={['flex:grow', 'flex:row', 'items:center', ...innerClasses]}>
          {loading ? (
            <Styled.View classes={['flex:1', 'items:center']}>
              <ActivityIndicator
                color="rgba(255, 255, 255, 0.7)"
                size={Platform.select({ android: 'large', default: 'small' })}
              />
            </Styled.View>
          ) : (
            <>
              <Styled.View classes={['w:14', 'px:4']}>
                {leftIcon ? <Icon name={leftIcon} filled /> : null}
              </Styled.View>
              <Styled.View classes={['flex:1', 'items:center']}>
                <Styled.Text>{title}</Styled.Text>
              </Styled.View>
              <Styled.View classes={['w:14', 'px:4']}>
                {rightIcon ? <Icon name={rightIcon} filled /> : null}
              </Styled.View>
            </>
          )}
        </Styled.View>
      </Styled.RectButton>
    </Styled.View>
  ),
);
