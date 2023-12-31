import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './App.routes';

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};
