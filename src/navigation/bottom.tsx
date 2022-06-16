import { Tabbar } from '@app/components';
import { TabbarProvider } from '@app/providers';
import { Home, Settings } from '@app/screens';
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
        initialRouteName="Home"
        screenOptions={defaultScreenOptions}
        tabBar={tabBar}>
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="Settings" component={Settings} />
      </BottomTab.Navigator>
    </TabbarProvider>
  );
};
