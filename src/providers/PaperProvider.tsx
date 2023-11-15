import React from 'react';
import {PaperProvider} from 'react-native-paper';

const UiProviders = ({children}: {children: React.ReactNode}) => {
  return <PaperProvider>{children}</PaperProvider>;
};

export default UiProviders;
