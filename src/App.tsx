import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ContextProviders from './contexts/ContextProviders';
import Navigator from './Navigator';
import UiProviders from './providers/PaperProvider';

StatusBar.setBarStyle('dark-content');

function App() {
  return (
    <ContextProviders>
      <UiProviders>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </UiProviders>
    </ContextProviders>
  );
}

export default App;
