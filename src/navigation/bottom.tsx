import { Tabbar } from '@app/components';
import { TabbarProvider } from '@app/providers';
import { Transactions, Settings, Assets, Analytics } from '@app/screens';
import type { RootTabParamList } from '@app/types';
import type {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useCallback } from 'react';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const defaultScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

export const BottomTabNavigator = () => {
  const tabBar = useCallback(
    (props: BottomTabBarProps) => <Tabbar {...props} />,
    [],
  );

  return (
    <TabbarProvider>
      <BottomTab.Navigator
        initialRouteName="Transactions"
        screenOptions={defaultScreenOptions}
        tabBar={tabBar}>
        <BottomTab.Screen name="Transactions" component={Transactions} />
        <BottomTab.Screen name="Assets" component={Assets} />
        <BottomTab.Screen name="Analytics" component={Analytics} />
        <BottomTab.Screen name="Settings" component={Settings} />
      </BottomTab.Navigator>
    </TabbarProvider>
  );
};
