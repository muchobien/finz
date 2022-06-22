import { Icon } from '@app/components/Icon';
import type { IconName } from '@app/components/Icon/constants';
import { Styled } from '@app/components/styled';
import { styles } from '@app/theme';
import type { TabScreenName } from '@app/types';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { memo, useCallback, useMemo } from 'react';

export type ItemProps = Pick<BottomTabBarProps, 'navigation'> & {
  name: string;
  focused: boolean;
};

const iconMap: Record<TabScreenName, IconName> = {
  Transactions: 'receipt',
  Assets: 'briefcase',
  Analytics: 'chartColumn',
  Settings: 'gear',
};

export const Item = memo<ItemProps>(({ name, focused, navigation }) => {
  const handlePress = useCallback(() => {
    navigation.navigate(name);
  }, [name, navigation]);

  const { color } = useMemo<Record<'color', string>>(
    () => styles('color:gray-400', focused && 'color:indigo-600'),
    [focused],
  );

  return (
    <Styled.BorderlessButton
      classes={[
        'flex:grow',
        'items:center',
        'justify:center',
        'mt:4',
        'safe:bottom',
      ]}
      onPress={handlePress}>
      <Icon
        name={iconMap[name as TabScreenName]}
        filled={focused}
        color={color}
      />
      <Styled.Text
        classes={[
          'text:sm',
          'mt:0',
          'color:gray-400',
          focused && 'color:indigo-600',
        ]}>
        {name}
      </Styled.Text>
    </Styled.BorderlessButton>
  );
});
