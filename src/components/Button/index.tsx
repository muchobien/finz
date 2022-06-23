import type { ComponentProps } from 'react';
import React, { memo } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import type { IconName } from '@app/components/Icon/constants';
import { Styled, styled } from '@app/components/styled';
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

const Center = styled.View('flex:1', 'items:center');
const Decorator = styled.View('w:14', 'px:4');
const Pressable = styled.RectButton('flex:grow');

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
      <Pressable onPress={onPress} enabled={enabled}>
        <Styled.View
          accessible
          accessibilityRole="button"
          classes={['flex:grow', 'flex:row', 'items:center', ...innerClasses]}>
          {loading ? (
            <Center>
              <ActivityIndicator
                color="rgba(255, 255, 255, 0.7)"
                size={Platform.select({ android: 'large', default: 'small' })}
              />
            </Center>
          ) : (
            <>
              <Decorator>
                {leftIcon ? <Icon name={leftIcon} filled /> : null}
              </Decorator>
              <Center>
                <Styled.Text>{title}</Styled.Text>
              </Center>
              <Decorator>
                {rightIcon ? <Icon name={rightIcon} filled /> : null}
              </Decorator>
            </>
          )}
        </Styled.View>
      </Pressable>
    </Styled.View>
  ),
);
