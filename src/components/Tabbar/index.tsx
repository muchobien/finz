import { useTabbar } from '@app/hooks';
import { Styled } from '@app/components/styled';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { memo } from 'react';
import { Item } from './Item';

export const Tabbar = memo(({ state, navigation }: BottomTabBarProps) => {
  const { updateHeight } = useTabbar();

  return (
    <Styled.BlurView
      classes={[
        'flex:row',
        'overflow:hidden',
        'rounded-t:2xl',
        'absolute',
        'bottom:0',
      ]}
      tint="dark"
      intensity={80}
      onLayout={updateHeight}>
      {state.routes.map((route, index) => (
        <Item
          key={route.key}
          name={route.name}
          focused={index === state.index}
          navigation={navigation}
        />
      ))}
    </Styled.BlurView>
  );
});
