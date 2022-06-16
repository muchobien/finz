import { AccountAdd } from '@app/screens';
import type { SheetParamList } from '@app/types';
import type { BottomSheetNavigationOptions } from '@th3rdwave/react-navigation-bottom-sheet';
import { createBottomSheetNavigator } from '@th3rdwave/react-navigation-bottom-sheet';
import { RootNavigator } from './root';

const Sheet = createBottomSheetNavigator<SheetParamList>();

const defaultScreenOptions: BottomSheetNavigationOptions = {
  snapPoints: ['25%', '50%', '75%'],
};

export const SheetNavigator = () => (
  <Sheet.Navigator initialRouteName="App" screenOptions={defaultScreenOptions}>
    <Sheet.Screen name="App" component={RootNavigator} />
    <Sheet.Screen name="AccountAdd" component={AccountAdd} />
  </Sheet.Navigator>
);
