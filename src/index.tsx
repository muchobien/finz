import type { FC } from 'react';
import { useApp } from '@app/hooks';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Navigation } from './navigation';
import { DataBaseProvider } from './providers';

export const App: FC = () => {
  const { handleReady, ready } = useApp();

  if (!ready) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <DataBaseProvider>
          <Navigation onReady={handleReady} />
        </DataBaseProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
