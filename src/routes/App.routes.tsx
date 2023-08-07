import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Scanner } from '@screens/Scanner';
import { PokemonDetails } from '@screens/PokemonDetails';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Scanner" component={Scanner} />
      <Screen name="PokemonDetails" component={PokemonDetails} />
    </Navigator>
  );
};
