import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import Finz from '@app';
import { enableFreeze, enableScreens } from 'react-native-screens';

enableFreeze(true);
enableScreens(true);

export default function App() {
  return <Finz />;
}
