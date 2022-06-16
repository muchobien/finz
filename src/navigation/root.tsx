import { Auth } from '@app/screens';
import { useStoreBoolean } from '@app/services';
import type { RootStackParamList } from '@app/types';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import { BottomTabNavigator } from './bottom';

const Stack = createNativeStackNavigator<RootStackParamList>();

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const RootNavigator: FC = () => {
  const [logged] = useStoreBoolean('@logged');

  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={defaultScreenOptions}>
      {logged ? (
        <Stack.Group>
          <Stack.Screen name="Root" component={BottomTabNavigator} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Auth" component={Auth} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};
