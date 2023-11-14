import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ContextProviders from './contexts/ContextProviders';
import Navigator from './Navigator';

StatusBar.setBarStyle('dark-content');

function App() {
  return (
    <ContextProviders>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </ContextProviders>
  );
}

export default App;
