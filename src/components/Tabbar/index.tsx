import { useTabbar } from '@app/hooks';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { memo } from 'react';
import { Item } from './Item';
import { Container } from './styles';

export const Tabbar = memo(({ state, navigation }: BottomTabBarProps) => {
  const { updateHeight } = useTabbar();

  return (
    <Container onLayout={updateHeight}>
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
