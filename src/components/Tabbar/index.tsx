import { useTabbar } from '@app/hooks';
import { styled } from '@app/components/styled';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { memo } from 'react';
import { Item } from './Item';

const Container = styled.BlurView(
  'flex:row',
  'overflow:hidden',
  'rounded-t:2xl',
  'absolute',
  'bottom:0',
);

export const Tabbar = memo(({ state, navigation }: BottomTabBarProps) => {
  const { updateHeight } = useTabbar();

  return (
    <Container tint="dark" intensity={80} onLayout={updateHeight}>
      {state.routes.map((route, index) => (
        <Item
          key={route.key}
          name={route.name}
          focused={index === state.index}
          navigation={navigation}
        />
      ))}
    </Container>
  );
});
