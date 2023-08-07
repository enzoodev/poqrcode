import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/theme';
import { Routes } from './src/routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
